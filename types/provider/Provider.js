export function handlerUrl(url, options) {
    let _url = url;
    if (options.path) {
        Object.entries(options.path).forEach(([key, value]) => {
            const _value = String(value);
            if (!_value)
                throw new Error(`The path ${key} has no value`);
            _url = _url.replace(`{${key}}`, _value);
        });
    }
    if (options.query) {
        const query = new URLSearchParams(options.query);
        _url = `${_url}?${query}`;
    }
    return _url;
}
