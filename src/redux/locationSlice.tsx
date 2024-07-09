import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormattedLocation } from "../constants/types/GeocodingData";
import { defaultLocation } from "../constants/weather";

type State = {
  current: FormattedLocation; //物件
  saved: FormattedLocation[] | null; //陣列包物件
};

const localStorageCurrent = JSON.parse(
  localStorage.getItem("currentLocation") as string
);

const initialState: State = {
  current: localStorageCurrent || defaultLocation,
  saved: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateCurrentLocation: (
      state,
      action: PayloadAction<FormattedLocation>
    ) => {
      state.current = action.payload;
    },
    updateSavedLocation: (
      state,
      action: PayloadAction<FormattedLocation[]>
    ) => {
      state.saved = action.payload;
    },
  },
});

export const { updateCurrentLocation, updateSavedLocation } =
  locationSlice.actions;

export default locationSlice.reducer;
