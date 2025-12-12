import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // Vite dev server options
    server: {
      host: true, // allow external access
      strictPort: false, // let Replit pick an available port
      // allow all replit subdomains (this will accept *.replit.dev hosts like sisko.replit.dev)
      allowedHosts: [".replit.dev", "localhost"],
      // note: you could also put the single exact host string here if you prefer
      // allowedHosts: ["f5ec304c-9579-4c5d-bd00-087bd166f6a6-00-26owycdzerx1e.sisko.replit.dev"]
    },

    plugins: [react()],

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
