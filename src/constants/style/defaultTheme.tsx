import { DefaultTheme } from "styled-components";

export const darkTheme = {
  primaryText: "#D2D2D3",
  secondaryText: "#333", //*
  thirdText: "#767678",
  point: "#CAE8E9",

  appBg: "#1E1F24",
  maskBg: "#1a1e29d4",

  cardBg: "#2e2e38",
  cardBorder: "#363638",
  cardShadow: "#dddddd45",

  cardBgHover: "#4246487a",
  cardBorderHover: "#363638",
  cardShadowHover: "#dddddd45",

  cardBgActive: "#2e2e3887",
  cardBorderActive: "#606268",
  cardShadowActive: "#b9b8b845",
};

export const lightTheme = {
  primaryText: "#071D3E",
  secondaryText: "#eceef0",
  point: "#5f8998",
  thirdText: "#afafb0",

  appBg: "#f9f8f8",
  maskBg: "#f9f8f843",

  cardBg: "#FBFBFB",
  cardBorder: "#d0d0d0", //*
  cardShadow: "#f6f5f518",

  cardBgHover: "#f1efefa7",
  cardBorderHover: "#a9aab7", //*
  cardShadowHover: "#86859217",

  cardBgActive: "#FBFBFB",
  cardBorderActive: "#bfbebe", //*
  cardShadowActive: "#f6f5f518",
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
  sm: "20px",
  xs: "16px",
  max: "999px",
};

const theme: DefaultTheme = {
  colors,
  borderRadius,
};

export default theme;
