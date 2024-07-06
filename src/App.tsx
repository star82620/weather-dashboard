import { ThemeProvider } from "styled-components";
import theme from "./constants/style/defaultTheme";
import { GlobalStyle } from "./constants/style/global";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchBar />
    </ThemeProvider>
  );
}

export default App;
