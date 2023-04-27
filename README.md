# HiMee Style

## install

`npm install himee-style`

## usage

### use styles

- Required
  Both `less` and `less-loader` should be installed since those style files are not bundled as native JavaScript output.

- Use mini app base style
  Import whole less files with default entry file.

```javascript
// main.js
import "himee-style";
```

- Import partial atom-like style with single file which exported under folder `himee-style/styles/`

```javascript
// main.js

// import 'himee-style/styles/base.less'
// import 'himee-style/styles/border.less'
// import 'himee-style/styles/box.less'
// import 'himee-style/styles/flex.less'
// import 'himee-style/styles/font.less'
// import 'himee-style/styles/rounded.less'
```

### use types (WIP)

A set of TypeScript type declaration files generated from the Swagger API have been packaged into the `types/api` directory, and you can use them in this way blow 👇🏻

// TODO

```ts
// 
import { IApiFn } from "himee-style/types/api/消息服务";

export const apiFn: IApiFn = (url: string) => {
  return {
    get() {
      return new Promise((resolve) => resolve(null));
    },
    post() {
      return new Promise((resolve) => resolve(null));
    },
  };
};
```
