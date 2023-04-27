import { RequestProvider } from "./Provider";

export const createProvider = () => {
  const provider: RequestProvider = {
    get(url, options) {
      return fetch(url, {
        method: "get",
        body: options.body as unknown as string,
      }).then((t) => t.json());
    },
    post(url, options) {
      return fetch(url, {
        method: "post",
        body: options.body as unknown as string,
      }).then((t) => t.json());
    },
    put(url, options) {
      return fetch(url, {
        method: "put",
        body: options.body as unknown as string,
      }).then((t) => t.json());
    },
    head(url, options) {
      return fetch(url, {
        method: "head",
        body: options.body as unknown as string,
      }).then((t) => t.json());
    },
    delete(url, options) {
      return fetch(url, {
        method: "delete",
        body: options.body as unknown as string,
      }).then((t) => t.json());
    },
    patch(url, options) {
      return fetch(url, {
        method: "patch",
        body: options.body as unknown as string,
      }).then((t) => t.json());
    },
  };
  return provider;
};
