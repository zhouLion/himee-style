import { Axios } from "axios";
import type { RequestProvider } from "./Provider";
export declare const createProvider: (axios: Axios) => RequestProvider;
export declare const createRequest: (axios?: Axios) => {
    provider: RequestProvider;
    instance: Axios;
};
