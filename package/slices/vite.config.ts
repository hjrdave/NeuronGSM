/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    minify: true,
    outDir: "../package/dist/",
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: "./slices/index.ts",
      name: "NeuronSlices",
      fileName: "index",
    },
    rollupOptions: {
      external: ["../vanilla"],
      output: [
        {
          dir: "../package/dist/slices/",
          name: "index",
          entryFileNames: "index.js",
        },
        {
          dir: "../package/dist/slices/",
          name: "index",
          format: "cjs",
          entryFileNames: "index.cjs",
        },
        {
          dir: "../package/dist/slices/umd/",
          name: "index",
          format: "umd",
          entryFileNames: "index.js",
        },
        {
          dir: "../package/dist/slices/esm/",
          name: "index",
          format: "esm",
          entryFileNames: "index.js",
        },
        {
          dir: "../package/dist/slices/iife/",
          name: "index",
          format: "iife",
          entryFileNames: "index.js",
        },
        {
          dir: "../package/dist/slices/system/",
          name: "index",
          format: "system",
          entryFileNames: "index.js",
        },
      ],
    },
  },
  plugins: [dts({ rollupTypes: true }), tsconfigPaths()],
});
