import { ThemeProvider } from "styled-components";
import theme from "./constants/style/defaultTheme";
import { GlobalStyle } from "./constants/style/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      weather
    </ThemeProvider>
  );
}

export default App;
