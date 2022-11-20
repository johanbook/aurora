import { createTheme as createMuiTheme } from "@mui/material/styles";
import PALLETE from "./palette";

export function createTheme() {
  return createMuiTheme({
    palette: {
      error: {
        main: PALLETE.red,
      },
      primary: {
        main: PALLETE.blue,
      },
      success: {
        main: PALLETE.green,
      },
    },
  });
}
