import { defineConfig } from "cf/config";
import * as entrypoint from "./src/index" with { type: "cf-worker" };

export default defineConfig({
  worker: {
    entrypoint,
    name: "tarsier-api",
    compatibilityDate: "2026-10-06",
    observability: {
      enabled: true,
    },
  },
});
