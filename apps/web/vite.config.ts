import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { astryxStylex } from "@astryxdesign/build/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    ...astryxStylex(),
    react(),
    cloudflare(),
  ],
});
