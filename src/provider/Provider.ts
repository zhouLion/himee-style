export interface Options {
  body?: never;
  formData?: never;
  path?: never;
  query?: never;
}

export type RequestProvider = {
  get(url: string, options: Options): Promise<unknown>;
  post(url: string, options: Options): Promise<unknown>;
  put(url: string, options: Options): Promise<unknown>;
  head(url: string, options: Options): Promise<unknown>;
  delete(url: string, options: Options): Promise<unknown>;
  patch(url: string, options: Options): Promise<unknown>;
};

export function handlerUrl(url: string, options: Options): string {
  let _url = url;
  if (options.path) {
    Object.entries(options.path).forEach(([key, value]) => {
      const _value = String(value);
      if (!_value) throw new Error(`The path ${key} has no value`);
      _url = _url.replace(`{${key}}`, _value);
    });
  }

  if (options.query) {
    const query = new URLSearchParams(options.query);
    _url = `${_url}?${query}`;
  }

  return _url;
}
