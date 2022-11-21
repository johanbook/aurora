import React from "react";
import { createTheme, ThemeProvider } from "../theme";

interface WrapperProps {
  children: React.ReactNode;
}

export default function StyleGuideWrapper({ children }: WrapperProps) {
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
