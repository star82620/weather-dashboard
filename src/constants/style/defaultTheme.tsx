import { DefaultTheme } from "styled-components";

export const darkTheme = {
  appBg: "#1E1F24",
  cardBg: "#2e2e3887",
  cardBorder: "#363638",
  cardShadow: "#dddddd45",
  primaryText: "#D2D2D3",
  secondaryText: "#333", //*
  point: "#CAE8E9",
  cardBgHover: "#353f44",
  cardBorderHover: "#363638",
  cardShadowHover: "#dddddd45",
};

export const lightTheme = {
  appBg: "#f9f8f8",
  cardBg: "#FBFBFB",
  cardBorder: "#bfbebe", //*
  cardShadow: "#f6f5f518",
  primaryText: "#071D3E",
  secondaryText: "#8C9098",
  point: "#2E69FE",
};

const colors = {
  primary: "#2e69fe",
  light: "#fbfbfb",
  grayLight: "#f0f0f0",
  grayMiddle: "#aaa",
  grayDark: "#333",
};

const borderRadius = {
  common: "36px",
  max: "999px",
};

const theme: DefaultTheme = {
  colors,
  borderRadius,
};

export default theme;
