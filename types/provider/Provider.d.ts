interface Options {
    body?: never;
    formData?: never;
    path?: never;
    query?: never;
}
type RequestProvider = {
    get(url: string, options: Options): Promise<unknown>;
    post(url: string, options: Options): Promise<unknown>;
    put(url: string, options: Options): Promise<unknown>;
    head(url: string, options: Options): Promise<unknown>;
    delete(url: string, options: Options): Promise<unknown>;
    patch(url: string, options: Options): Promise<unknown>;
};
declare function handlerUrl(url: string, options: Options): string;

export { Options, RequestProvider, handlerUrl };
