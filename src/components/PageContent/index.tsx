import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import {
  defaultLocation,
  defaultTemperatureUnit,
} from "../../constants/weather";
import Header from "../Header";
import Main from "../Main";
import SavedList from "../SavedList";
import { ActiveThemeProps } from "../../constants/types/Theme";
import { Wrapper } from "./styled";
import SearchModal from "../SearchModal";

export default function PageContent({
  activeTheme,
  setActiveTheme,
}: ActiveThemeProps) {
  const dispatch = useAppDispatch();

  // initialize localStorage
  useEffect(() => {
    // temperature unit
    const storeUnit = localStorage.getItem("temperatureUnit");

    if (!storeUnit) {
      return localStorage.setItem("temperatureUnit", defaultTemperatureUnit);
    }

    if (storeUnit === "celsius" || storeUnit === "fahrenheit") {
      dispatch(switchUnit(storeUnit));
    }

    // currentLocation
    const currentLocation = localStorage.getItem("currentLocation");

    if (!currentLocation) {
      localStorage.setItem("currentLocation", JSON.stringify(defaultLocation));
    }

    // savedLocations
    const savedLocations = localStorage.getItem("savedLocations");

    if (!savedLocations) {
      localStorage.setItem("savedLocations", JSON.stringify([]));
    }
  }, []);

  const isSearchModalOpen = useAppSelector((state) => state.modal.searchMode);

  return (
    <Wrapper $stopScroll={isSearchModalOpen}>
      <Header activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <Main />
      <SavedList />
      <SearchModal />
    </Wrapper>
  );
}
