import { Dispatch, SetStateAction } from "react";

export type ActiveTheme = "dark" | "light";

export type ActiveThemeProps = {
  activeTheme: ActiveTheme;
  setActiveTheme: Dispatch<SetStateAction<ActiveTheme>>;
};
