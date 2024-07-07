import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Unit = "Celsius" | "Fahrenheit";
type State = {
  value: Unit;
};

const initialState: State = { value: "Celsius" };

export const temperatureUnitSlice = createSlice({
  name: "temperatureUnit",
  initialState,
  reducers: {
    switchUnit: (state, action: PayloadAction<Unit>) => {
      state.value += action.payload;
    },
  },
});

export const { switchUnit } = temperatureUnitSlice.actions;

export default temperatureUnitSlice.reducer;
