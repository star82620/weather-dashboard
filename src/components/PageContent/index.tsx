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
import { Wrapper } from "./styled";
import SearchModal from "../SearchModal";

export default function PageContent() {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.searchMode);

  // 防滾動
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

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

    // theme
    const theme = localStorage.getItem("theme");

    if (!theme) {
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
  }, []);

  const isSearchModalOpen = useAppSelector((state) => state.modal.searchMode);

  return (
    <Wrapper $stopScroll={isSearchModalOpen}>
      <Header />
      <Main />
      <SavedList />
      <SearchModal />
    </Wrapper>
  );
}
