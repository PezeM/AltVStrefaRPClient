import path from "path";
import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: path.resolve(__dirname, "index.ts"),
  output: {
    file: path.resolve(__dirname, "..", "client", "index.bundle.js"),
    format: "esm"
  },

  external: ["chat", "alt", "natives", "networking-entity"],

  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, "tsconfig.json")
    }),
    resolve(),
    builtins(),
    json(),
    terser()
  ]
};
