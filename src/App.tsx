import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme from "./constants/style/defaultTheme";
import { GlobalStyle } from "./constants/style/global";
import PageContent from "./components/PageContent";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
