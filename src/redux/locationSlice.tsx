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

const savedLocations: FormattedLocation[] = [
  {
    id: 1668355,
    name: "Tainan City",
    latitude: 22.99083,
    longitude: 120.21333,
    country_code: "TW",
    country: "Taiwan",
  },
  {
    id: 1668341,
    name: "Taipei",
    latitude: 25.04776,
    longitude: 121.53185,
    country_code: "TW",
    country: "Taiwan",
  },
  {
    id: 1850147,
    name: "Tokyo",
    latitude: 35.6895,
    longitude: 139.69171,
    country_code: "JP",
    country: "Japan",
  },
];

const initialState: State = {
  current: localStorageCurrent || defaultLocation,
  saved: savedLocations,
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
