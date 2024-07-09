import { DefaultTheme } from "styled-components";

const colors = {
  primary: "#2e69fe",
  light: "#fbfbfb",
  grayLight: "#f0f0f0",
  grayMiddle: "#aaa",
  grayDark: "#333",

  // mode
  darkMode: {
    appBg: "#1E1F24",
    cardBg: "#2E2E38",
    cardBorder: "#33333D",
    primaryText: "#D2D2D3",
    secondaryText: "#333", //*
    point: "#CAE8E9",
  },
  lightMode: {
    appBg: "#FFFFFF",
    cardBg: "#FBFBFB",
    cardBorder: "#333", //*
    primaryText: "#071D3E",
    secondaryText: "#8C9098",
    point: "#2E69FE",
  },
};

const borderRadius = {
  common: "20px",
  max: "999px",
};

const theme: DefaultTheme = {
  colors,
  borderRadius,
};

export default theme;
