import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const isDev = Boolean(process.env.ROLLUP_WATCH);

export default [
  // Browser bundle
  {
    input: "src/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "build/bundle.js",
    },
    plugins: [
      svelte({
        hydratable: true,
        css: (css) => {
          css.write("build/bundle.css");
        },
      }),
      resolve(),
      commonjs(),
      // App.js will be built after bundle.js, so we only need to watch that.
      // By setting a small delay the Node server has a chance to restart before reloading.
      isDev &&
        livereload({
          watch: "build/App.js",
          delay: 200,
        }),
      !isDev && terser(),
    ],
  },
  // Server bundle
  {
    input: "src/App.svelte",
    output: {
      sourcemap: false,
      format: "cjs",
      name: "app",
      file: "build/App.js",
    },
    plugins: [
      svelte({
        generate: "ssr",
      }),
      resolve(),
      commonjs(),
      !isDev && terser(),
    ],
  },
];
