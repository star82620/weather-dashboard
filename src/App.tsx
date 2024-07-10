import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme, { lightTheme, darkTheme } from "./constants/style/defaultTheme";
import { ActiveTheme } from "./constants/types/Theme";
import PageContent from "./components/PageContent";
import { GlobalStyle } from "./constants/style/global";

function App() {
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>("dark");
  const customTheme = activeTheme === "dark" ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme, mode: customTheme }}>
        <GlobalStyle />
        <PageContent
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
        />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
