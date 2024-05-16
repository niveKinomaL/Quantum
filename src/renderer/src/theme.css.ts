import { createTheme } from "@vanilla-extract/css";

export const SPACING_UNIT = 8;

export const [themeClass, vars] = createTheme({
  color: {
    background: "#0F0F0F",
    darkBackground: "#0F0F0F",
    muted: "#B6BBC4",
    bodyText: "#B6BBC4",
    border: "#713ABE",
  },
  opacity: {
    disabled: "0.5",
    active: "0.7",
  },
  size: {
    bodyFontSize: "14px",
  },
});
