import { configureStore } from "@reduxjs/toolkit";
import temperatureUnitReducer from "./temperatureUnitSlice";
import locationReducer from "./locationSlice";
import themeModeReducer from "./themeModeSlice";

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
    location: locationReducer,
    themeMode: themeModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
