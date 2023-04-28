import { Axios } from "axios";
import type { RequestProvider } from "./Provider";
import { handlerUrl } from "./Provider";

export const createProvider = (axios: Axios) => {
  const provider: RequestProvider = {
    get(url, options) {
      return axios.get(handlerUrl(url, options), {
        data: options.body,
      });
    },
    post(url, options) {
      return axios.post(
        handlerUrl(url, options),
        options.body || options.formData
      );
    },
    put(url, options) {
      return axios.put(
        handlerUrl(url, options),
        options.body || options.formData
      );
    },
    head(url, options) {
      return axios.head(
        handlerUrl(url, options),
        options.body || options.formData
      );
    },
    delete(url, options) {
      return axios.delete(
        handlerUrl(url, options),
        options.body || options.formData
      );
    },
    patch(url, options) {
      return axios.patch(
        handlerUrl(url, options),
        options.body || options.formData
      );
    },
  };
  return provider;
};

export const createRequest = (axios = new Axios()) => {
  return {
    provider: createProvider(axios),
    instance: axios,
  };
};
