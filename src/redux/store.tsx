import { configureStore } from "@reduxjs/toolkit";
import temperatureUnitReducer from "./temperatureUnitSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
