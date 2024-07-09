import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormattedLocation } from "../constants/types/GeocodingData";
import { defaultLocation } from "../constants/weather";

type InitialState = {
  current: FormattedLocation; //物件
  saved: FormattedLocation[] | []; //陣列包物件
};

const localStorageCurrent: FormattedLocation = JSON.parse(
  localStorage.getItem("currentLocation") as string
);
const localStorageSaved: FormattedLocation[] = JSON.parse(
  localStorage.getItem("savedLocations") as string
);

const initialState: InitialState = {
  current: localStorageCurrent || defaultLocation,
  saved: localStorageSaved || [],
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
