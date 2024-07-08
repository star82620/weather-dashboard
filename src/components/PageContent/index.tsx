import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import { defaultTemperatureUnit } from "../../constants/weather";
import Header from "../Header";
import Main from "../Main";

export default function PageContent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storeUnit = localStorage.getItem("temperatureUnit");

    // 如果沒資料就給預設單位
    if (!storeUnit) {
      return localStorage.setItem("temperatureUnit", defaultTemperatureUnit);
    }

    // 有資料就存入 redux
    if (storeUnit === "celsius" || storeUnit === "fahrenheit") {
      dispatch(switchUnit(storeUnit));
    }
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
