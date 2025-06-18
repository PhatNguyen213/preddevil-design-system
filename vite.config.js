import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), dts({ rollupTypes: true }), tailwindcss()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/components/input/input.ts"),
      name: "MyInput",
      fileName: "my-input",
    },
  },
  server: {
    open: "/index.html",
  },
});
