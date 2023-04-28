import { request } from "@tarojs/taro";
import type { RequestProvider } from "./Provider";
export declare const createProvider: (taroRequest: typeof request) => RequestProvider;
