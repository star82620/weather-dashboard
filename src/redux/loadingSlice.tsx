import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  app: boolean;
  search: boolean;
  weather: boolean;
};

const initialState: InitialState = {
  app: false,
  search: false,
  weather: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    updateAppLoading: (state, action: PayloadAction<boolean>) => {
      state.app = action.payload;
    },
    updateSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.search = action.payload;
    },
    updateWeatherLoading: (state, action: PayloadAction<boolean>) => {
      state.weather = action.payload;
    },
  },
});

export const { updateAppLoading, updateSearchLoading, updateWeatherLoading } =
  loadingSlice.actions;

export default loadingSlice.reducer;
