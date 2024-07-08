import { configureStore } from "@reduxjs/toolkit";
import temperatureUnitReducer from "./temperatureUnitSlice";

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
