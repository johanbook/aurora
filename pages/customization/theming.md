Aurora supports injecting your own custom theme

```tsx static
import { createTheme, ThemeProvider } from "@johanbook/aurora/theme";

function App() {
  const theme = createTheme();
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
```
