import { Axios } from "axios";
import { RequestProvider } from "./Provider";

export const createProvider = (axios: Axios) => {
  const provider: RequestProvider = {
    get(url, options) {
      return axios.get(url, {
        data: options.body,
        params: options.query,
      });
    },
    post(url, options) {
      return axios.post(url, options.body);
    },
    put(url, options) {
      return axios.put(url);
    },
    head(url, options) {
      return axios.head(url);
    },
    delete(url, options) {
      return axios.delete(url);
    },
    patch(url, options) {
      return axios.patch(url);
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
