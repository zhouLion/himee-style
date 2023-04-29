import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["axios", "@tarojs/taro"],
  minify: true,
  outDir: "types",
});
