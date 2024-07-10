import { configureStore } from "@reduxjs/toolkit";
import temperatureUnitReducer from "./temperatureUnitSlice";
import locationReducer from "./locationSlice";
import themeReducer from "./themeSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
    location: locationReducer,
    theme: themeReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
