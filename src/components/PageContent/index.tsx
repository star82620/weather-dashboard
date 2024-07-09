import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import {
  defaultLocation,
  defaultTemperatureUnit,
} from "../../constants/weather";
import Header from "../Header";
import Main from "../Main";

export default function PageContent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storeUnit = localStorage.getItem("temperatureUnit");
    const currentLocation = localStorage.getItem("currentLocation");

    // 如果沒 unit 資料就給預設單位
    if (!storeUnit) {
      return localStorage.setItem("temperatureUnit", defaultTemperatureUnit);
    }

    // 有 unit 資料就存入 redux
    if (storeUnit === "celsius" || storeUnit === "fahrenheit") {
      dispatch(switchUnit(storeUnit));
    }

    if (!currentLocation) {
      localStorage.setItem("currentLocation", JSON.stringify(defaultLocation));
    }
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
