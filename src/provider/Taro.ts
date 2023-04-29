import { request } from "@tarojs/taro";
import type { RequestProvider } from "./Provider";
import { handlerUrl } from "./Provider";

export const createProvider = (taroRequest: typeof request) => {
  const provider: RequestProvider = {
    async get(url, options) {
      const res = await taroRequest({
        url: handlerUrl(url, options),
        method: 'GET',
        data: options.body || options.formData,
      });
      return res.data;
    },
    async post(url, options) {
      const res = await taroRequest({
        url: handlerUrl(url, options),
        method: 'POST',
        data: options.body || options.formData,
      });
      return res.data;
    },
    async put(url, options) {
      const res = await taroRequest({
        url: handlerUrl(url, options),
        method: 'PUT',
        data: options.body || options.formData,
      });
      return res.data;
    },
    async head(url, options) {
      const res = await taroRequest({
        url: handlerUrl(url, options),
        method: 'HEAD',
        data: options.body || options.formData,
      });
      return res.data;
    },
    async delete(url, options) {
      const res = await taroRequest({
        url: handlerUrl(url, options),
        method: 'DELETE',
        data: options.body || options.formData,
      });
      return res.data;
    },
    async patch(url, options) {
      const res = await taroRequest({
        url: handlerUrl(url, options),
        method: 'PATCH',
        data: options.body || options.formData,
      });
      return res.data;
    },
  };
  return provider;
};
