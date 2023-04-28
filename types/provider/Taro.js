import { handlerUrl } from "./Provider";
export const createProvider = (taroRequest) => {
    const provider = {
        async get(url, options) {
            const res = await taroRequest({
                url: handlerUrl(url, options),
                data: options.body || options.formData,
            });
            return res.data;
        },
        async post(url, options) {
            const res = await taroRequest({
                url: handlerUrl(url, options),
                data: options.body || options.formData,
            });
            return res.data;
        },
        async put(url, options) {
            const res = await taroRequest({
                url: handlerUrl(url, options),
                data: options.body || options.formData,
            });
            return res.data;
        },
        async head(url, options) {
            const res = await taroRequest({
                url: handlerUrl(url, options),
                data: options.body || options.formData,
            });
            return res.data;
        },
        async delete(url, options) {
            const res = await taroRequest({
                url: handlerUrl(url, options),
                data: options.body || options.formData,
            });
            return res.data;
        },
        async patch(url, options) {
            const res = await taroRequest({
                url: handlerUrl(url, options),
                data: options.body || options.formData,
            });
            return res.data;
        },
    };
    return provider;
};
