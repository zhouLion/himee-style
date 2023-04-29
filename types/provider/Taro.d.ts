import { request } from '@tarojs/taro';
import { RequestProvider } from './Provider.js';

declare const createProvider: (taroRequest: typeof request) => RequestProvider;

export { createProvider };
