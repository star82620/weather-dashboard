import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";
export const defaultTheme: Theme = "dark";

const storeTheme = JSON.parse(localStorage.getItem("theme") as Theme);

type InitialState = {
  active: Theme;
};

const initialState: InitialState = {
  active: storeTheme || defaultTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<Theme>) => {
      state.active = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
