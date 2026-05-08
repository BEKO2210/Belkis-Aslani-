import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the site at https://BEKO2210.github.io/Belkis-Aslani-/
// → during build the base must be the repo path; in dev it stays root.
const REPO_BASE = "/Belkis-Aslani-/";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? REPO_BASE : "/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ["gsap"],
          motion: ["framer-motion"],
          react: ["react", "react-dom"],
        },
      },
    },
  },
}));
