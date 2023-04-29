import type {
  DocumentDetails,
  OperationDetails,
  Schema
} from "@icholy/openapi-ts";
import { analyse, load, Printer } from "@icholy/openapi-ts";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  rmdirSync,
  unlinkSync,
  writeFileSync
} from "fs";
import { join, resolve } from "path";
import { format } from "prettier";

dotenv.config({
  path: ".env.local",
});

interface Resource {
  location: string;
  name: string;
  swaggerVersion: string;
  url: string;
}

const BASE = process.env.BASE;
const SWAGGERRESOURCES = process.env.SWAGGERRESOURCES;
const output = resolve(process.cwd(), "src/api");

if (!BASE || !SWAGGERRESOURCES) {
  throw new Error("Missing env variables");
}

class MyPrinter extends Printer {
  /**
   * @param str
   */
  public commentBlock(comments: string | string[]) {
    if (!comments) return;
    if (Array.isArray(comments)) {
      if (comments.length === 0) return;
      comments = comments.join("\n");
    }
    this.raw(`/**\n * ${comments}\n */`);
  }
}

const createIApiFnTemplate = (
  operations: OperationDetails[],
  printter: MyPrinter
) => {
  if (operations.length === 0) return "";
  // group by path
  const groupByPath = operations.reduce((acc, cur) => {
    if (!acc[cur.path]) {
      acc[cur.path] = [];
    }
    acc[cur.path].push(cur);
    return acc;
  }, {} as Record<string, OperationDetails[]>);

  const types = Object.entries(groupByPath).map(([path, _operations]) => {
    const innerMethodsType = _operations.map((operation) => {
      const { body, formData, path, query, response } = operation.params;
      const operationId = operation.obj.operationId;
      let optionsType = `{`;
      if (!body.isEmpty()) {
        printter.schema(formatSchema(body), `TBodyOf${operationId}`);
        optionsType += `body: TBodyOf${operationId},`;
      }
      if (!path.isEmpty()) {
        printter.schema(formatSchema(path), `TPathOf${operationId}`);
        optionsType += `path: TPathOf${operationId},`;
      }
      if (!formData.isEmpty()) {
        printter.schema(formatSchema(formData), `TFormDataOf${operationId}`);
        optionsType += `formData: TFormDataOf${operationId},`;
      }
      if (!query.isEmpty()) {
        printter.schema(formatSchema(query), `TQueryOf${operationId}`);
        optionsType += `query: TQueryOf${operationId},`;
      }
      optionsType += "}";

      printter.schema(formatSchema(response), `TResponseOf${operationId}`);

      return `
      /**
       * @description ${operation.obj.summary} ${operation.obj.operationId}
       * ${
         operation.obj.deprecated
           ? "@deprecated"
           : operation.obj.tags?.toString()
       }
       */
       ${
         operation.method
       }(options: ${optionsType}): Promise<TResponseOf${operationId}>`;
    });

    return `
    (url: '${path}'): {
      ${innerMethodsType.join(",\n")}
    }
    `;
  });
  return `
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head']: (options: any) => Promise<any>
  },
  ${types}
}

export interface RequestProvider {
  get(url: string, options: any): Promise<any>;
  post(url: string, options: any): Promise<any>;
  put(url: string, options: any): Promise<any>;
  head(url: string, options: any): Promise<any>;
  delete(url: string, options: any): Promise<any>;
  patch(url: string, options: any): Promise<any>;
}

/**
 * create a request by a provider
 */
export function createRequest(provider: RequestProvider): IApiFn {
  return (url: string) => {
    return {
      get: (options: any) => provider.get(url, options),
      post: (options: any) => provider.post(url, options),
      put: (options: any) => provider.put(url, options),
      head: (options: any) => provider.head(url, options),
      delete: (options: any) => provider.delete(url, options),
      patch: (options: any) => provider.patch(url, options),
    };
  };
}
`;
};

const doEscape = (text: string) =>
  text.replace(/\,/g, "_").replace(/«/g, "_").replace(/»/g, "_");

const clearDir = (dir: string, notFirstCall = false) => {
  if (existsSync(dir)) {
    readdirSync(dir).forEach((file) => {
      const curPath = join(dir, file);
      if (lstatSync(curPath).isDirectory()) {
        clearDir(curPath, true);
      } else {
        unlinkSync(curPath);
      }
    });
    try {
      if (notFirstCall) rmdirSync(dir);
    } catch {}
  }
};

const handleAdditional = (additional: Schema) => {
  if (additional.type === "List") {
    additional.type = "Array<unknown>";
  }
  if (additional.type === "Map") {
    additional.type = "Record<string, unknown>";
  }
  return additional;
};

const handleProperties = (properties: Record<string, Schema>) => {
  Object.entries(properties).forEach(([key, value]) => {
    value.type = doEscape(value.type);
    formatSchema(value);
    properties[key] = value;
  });
  return properties;
};

const formatSchema = (schema: Schema) => {
  schema.type = doEscape(schema.type);
  if (schema.type === "object") {
    if (schema.additional) {
      schema.additional = handleAdditional(schema.additional);
    }
    if (schema.properties) {
      schema.properties = handleProperties(schema.properties);
    }
  }
  return schema;
};

const transform = (doc: DocumentDetails): string => {
  if (
    (!doc.operations || !doc.operations.length) &&
    (!doc.definitions || !doc.definitions.length)
  )
    return "";

  const print = new MyPrinter();
  // output definitions
  for (const [name, schema] of Object.entries(doc.definitions)) {
    formatSchema(schema);

    const blockComments: string[] = [];
    if (schema.description)
      blockComments.push(`@description: ${schema.description}`);
    if (schema.deprecated)
      blockComments.push(`@description: ${schema.deprecated}`);
    print.commentBlock(blockComments);
    print.schema(schema, doEscape(name));
    print.blank();
  }
  const apiDeclares = createIApiFnTemplate(doc.operations, print);
  return (
    print.code() +
    "\n" +
    format(apiDeclares, {
      parser: "typescript",
      printWidth: 100,
    })
  );
};

// ensure dir, if not exists then create it
const ensureDir = (dir: string) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, {
      recursive: true,
    });
  }
  // delete subdirs and files under this dir
  clearDir(dir);
};

const generateDecalreFile = async (item: Resource) => {
  const targetFile = resolve(output, `./${item.name}.ts`);
  try {
    const doc = await load(BASE + item.location);
    const details = analyse(doc);
    console.log("⚙ Handling", targetFile);
    const code = transform(details);
    if (!code) {
      console.warn("❎ Handled empty", targetFile);
      return;
    }
    writeFileSync(targetFile, code, {
      encoding: "utf-8",
    });
    console.log("✅ Handled successfully", targetFile);
  } catch (error) {
    console.error("❌ Handled with error", targetFile, error.message);
  }
};

(() => {
  console.log("🚀：Generating API...");
  ensureDir(output);
  fetch(BASE + SWAGGERRESOURCES)
    .then((res) => res.json())
    .then((list: Resource[]) => {
      return Promise.all(list.map((item) => generateDecalreFile(item)));
    })
    .then(() => {
      console.log("🎉🎉🎉🎉🎉", "Done~");
    });
})();
