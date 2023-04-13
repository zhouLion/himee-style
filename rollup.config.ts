// import less from "postcss-less";
import { defineConfig } from "rollup";
import less from "rollup-plugin-less";

export default defineConfig({
  // ...
  input: "mp.js",
  plugins: [less()],
  output: {
    file: "dist/mp.js",
    format: "cjs",
  },
});
