import React from "react";
import { createTheme, ThemeProvider } from "../theme";

export default function StyleGuideWrapper({ children }) {
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
