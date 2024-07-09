import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme, { lightTheme, darkTheme } from "./constants/style/defaultTheme";
import { GlobalStyle } from "./constants/style/global";
import PageContent from "./components/PageContent";
import { useState } from "react";

function App() {
  const [activeTheme, setActiveTheme] = useState("dark");
  const customTheme = activeTheme === "dark" ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme, mode: customTheme }}>
        <GlobalStyle />
        <PageContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
