import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import {
  defaultLocation,
  defaultTemperatureUnit,
} from "../../constants/weather";
import Header from "../Header";
import Main from "../Main";
import SavedList from "../SavedList";
import { Wrapper } from "./styled";

export default function PageContent() {
  const dispatch = useAppDispatch();

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

  return (
    <Wrapper>
      <SavedList />
      <Header />
      <Main />
    </Wrapper>
  );
}
