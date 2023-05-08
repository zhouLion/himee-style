/**
 * UTF16和UTF8转换对照表
 * U+00000000 – U+0000007F 	0xxxxxxx
 * U+00000080 – U+000007FF 	110xxxxx 10xxxxxx
 * U+00000800 – U+0000FFFF 	1110xxxx 10xxxxxx 10xxxxxx
 * U+00010000 – U+001FFFFF 	11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 * U+00200000 – U+03FFFFFF 	111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
 * U+04000000 – U+7FFFFFFF 	1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
 */
declare const convertUtf16ToUtf8: (str: string) => string;
declare const convertUtf8ToUtf16: (str: string) => string;
declare const encode: (str: string) => string;
declare const decode: (str: string) => string;
declare const _default: {
    convertUtf16ToUtf8: (str: string) => string;
    convertUtf8ToUtf16: (str: string) => string;
    encode: (str: string) => string;
    decode: (str: string) => string;
};

export { convertUtf16ToUtf8, convertUtf8ToUtf16, decode, _default as default, encode };
