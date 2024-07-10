import { configureStore } from "@reduxjs/toolkit";
import temperatureUnitReducer from "./temperatureUnitSlice";
import locationReducer from "./locationSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
    location: locationReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
