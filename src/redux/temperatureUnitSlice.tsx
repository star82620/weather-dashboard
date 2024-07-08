import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemperatureUnitName } from "../constants/types/WeatherData";

type State = {
  value: TemperatureUnitName;
};

const initialState: State = { value: "celsius" };

export const temperatureUnitSlice = createSlice({
  name: "temperatureUnit",
  initialState,
  reducers: {
    switchUnit: (state, action: PayloadAction<TemperatureUnitName>) => {
      state.value = action.payload;
    },
  },
});

export const { switchUnit } = temperatureUnitSlice.actions;

export default temperatureUnitSlice.reducer;
