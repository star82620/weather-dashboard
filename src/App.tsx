import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme from "./constants/style/defaultTheme";
import { GlobalStyle } from "./constants/style/global";
import Header from "./components/Header";
import Main from "./components/Main";
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageWrapper />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
