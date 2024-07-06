import { ThemeProvider } from "styled-components";
import theme from "./constants/style/defaultTheme";
import { GlobalStyle } from "./constants/style/global";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
