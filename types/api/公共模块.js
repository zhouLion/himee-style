/**
 * create a request by a provider
 */
export function createRequest(provider) {
    return (url) => {
        return {
            get: (options) => provider.get(url, options),
            post: (options) => provider.post(url, options),
            put: (options) => provider.put(url, options),
            head: (options) => provider.head(url, options),
            delete: (options) => provider.delete(url, options),
            patch: (options) => provider.patch(url, options),
        };
    };
}
