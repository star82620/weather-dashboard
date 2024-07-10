import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";
export const defaultTheme: Theme = "dark";

type InitialState = {
  active: Theme;
};

const initialState: InitialState = {
  active: defaultTheme,
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
