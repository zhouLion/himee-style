// npx openapi-typescript https://petstore3.swagger.io/api/v3/openapi.yaml --output petstore.d.ts
import type { DocumentDetails } from "@icholy/openapi-ts";
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
const output = resolve(process.cwd(), "types/api");

if (!BASE || !SWAGGERRESOURCES) {
  throw new Error("Missing env variables");
}

function clearDir(dir: string, notFirstCall = false) {
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
}

function transform(doc: DocumentDetails): string {
  const print = new Printer();
  const escapeArrowSymbols = (text: string) =>
    text.replace(/«/g, "_").replace(/»/g, "_");
  // output definitions
  for (const [name, schema] of Object.entries(doc.definitions)) {
    print.schema(schema, escapeArrowSymbols(name));
  }
  return escapeArrowSymbols(print.code());
}

// ensure dir, if not exists then create it
function ensureDir(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, {
      recursive: true,
    });
  }
  // delete subdirs and files under this dir
  clearDir(dir);
}

async function gen(item: Resource) {
  const doc = await load(BASE + item.location);
  const details = analyse(doc);

  const targetFile = resolve(output, `./${item.name}.d.ts`);
  writeFileSync(targetFile, transform(details), {
    encoding: "utf-8",
  });
}

(() => {
  console.log("🚀：Generating API...");
  ensureDir(output);
  fetch(BASE + SWAGGERRESOURCES)
    .then((res) => res.json())
    .then((list: Resource[]) => {
      return Promise.all(list.map((item) => gen(item)));
    })
    .then(() => {
      console.log("🎉🎉🎉🎉🎉", "Done~");
    });
})();
