import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme, { lightTheme, darkTheme } from "./constants/style/defaultTheme";
import PageContent from "./components/PageContent";
import { GlobalStyle } from "./constants/style/global";
import { useAppSelector } from "./hooks/redux";

const Content = () => {
  const activeTheme = useAppSelector((state) => state.theme.active);
  const customTheme = activeTheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ ...theme, mode: customTheme }}>
      <GlobalStyle />
      <PageContent />
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;
