import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Mode = "dark" | "light";
export const defaultMode: Mode = "dark";

type InitialState = {
  mode: Mode;
};

const initialState: InitialState = {
  mode: defaultMode,
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    updateThemeMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
  },
});

export const { updateThemeMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;
