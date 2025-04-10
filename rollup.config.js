const nodeResolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");
const typescript = require("rollup-plugin-typescript2");

module.exports = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.cjs",
      format: "cjs",
    },
    plugins: [
      nodeResolve({ extensions: [".jsx", "js", ".tsx", ".ts"] }),
      typescript({ check: false }),
      babel({
        babelHelpers: "bundled",
        extensions: [".jsx", "js", ".tsx", ".ts"],
        presets: ["@babel/preset-typescript"],
      }),
      terser({
        // compress: { keep_fargs: true, keep_fnames: true },
      }),
    ],
  },
];
