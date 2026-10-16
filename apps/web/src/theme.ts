import "@astryxdesign/core/reset.css";
import "@astryxdesign/theme-neutral/theme.css";
import "@fontsource-variable/figtree";
import { defineTheme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral";

export const theme = defineTheme({
  name: "tarsier",
  extends: neutralTheme,
  typography: {
    body: {
      family: "Figtree Variable",
      fallbacks: "sans-serif",
    },
  },
});
