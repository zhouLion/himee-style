import { Axios } from 'axios';
import { RequestProvider } from './Provider.js';

declare const createProvider: (axios: Axios) => RequestProvider;
declare const createRequest: (axios?: Axios) => {
    provider: RequestProvider;
    instance: Axios;
};

export { createProvider, createRequest };
