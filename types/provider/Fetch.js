export const createProvider = () => {
    const provider = {
        get(url, options) {
            return fetch(url, {
                method: "get",
                body: options.body,
            }).then((t) => t.json());
        },
        post(url, options) {
            return fetch(url, {
                method: "post",
                body: options.body,
            }).then((t) => t.json());
        },
        put(url, options) {
            return fetch(url, {
                method: "put",
                body: options.body,
            }).then((t) => t.json());
        },
        head(url, options) {
            return fetch(url, {
                method: "head",
                body: options.body,
            }).then((t) => t.json());
        },
        delete(url, options) {
            return fetch(url, {
                method: "delete",
                body: options.body,
            }).then((t) => t.json());
        },
        patch(url, options) {
            return fetch(url, {
                method: "patch",
                body: options.body,
            }).then((t) => t.json());
        },
    };
    return provider;
};
