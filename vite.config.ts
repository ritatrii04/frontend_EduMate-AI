import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": srcPath,
    },
  },

  server: {
    port: 5173,
  },

  build: {
    target: "es2022",
    sourcemap: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) {
            return "vendor";
          }

          if (id.includes("node_modules/react-dom")) {
            return "vendor";
          }
        },
      },
    },
  },
});