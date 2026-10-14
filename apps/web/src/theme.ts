import "@astryxdesign/core/reset.css";
import "@astryxdesign/theme-neutral/theme.css";
import { defineTheme } from "@astryxdesign/core/theme";
import { neutralTheme } from "@astryxdesign/theme-neutral";

export const theme = defineTheme({
  name: "tarsier",
  extends: neutralTheme,
});
