import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

import "react";
import "react-dom";

export default defineConfig({
  root: "./client",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    deno(),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
