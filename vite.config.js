import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },

  resolve: {
    alias: [
      {
        find: "@components", replacement: resolve(__dirname, "src/@components")
      },
      {
        find: "@config", replacement: resolve(__dirname, "src/@config")
      },
      {
        find: "@hooks", replacement: resolve(__dirname, "src/@hooks")
      },
      {
        find: "@store", replacement: resolve(__dirname, "src/app/store")
      },
      {
        find: "@utils", replacement: resolve(__dirname, "src/utils")
      },
    ],
  },

  define: {
    "import.meta.env.PACKAGE_VERSION": `"${process.env.npm_package_version}"`,
  },

  build: {
    outDir: "build",

    rollupOptions: {
      output: {
        // https://github.com/facebook/regenerator/issues/378
        intro: "window.regeneratorRuntime = undefined;",

        // use a single chunk for inlining
        // https://github.com/rollup/rollup/issues/2756#issuecomment-821838231
        manualChunks: {},
      },
    },
  },

  plugins: [react(), eslintPlugin()],
});
