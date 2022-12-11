import { createTheme as createMuiTheme } from "@mui/material/styles";
import PALLETE from "./palette";

export function createTheme() {
  const palette = PALLETE["neon"];
  return createMuiTheme({
    palette: {
      error: {
        main: palette.error,
      },
      primary: {
        main: palette.primary,
      },
      success: {
        main: palette.success,
      },
    },
  });
}
