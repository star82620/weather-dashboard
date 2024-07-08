import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import Header from "../Header";
import Main from "../Main";
import { dafaultTemperatureUnit } from "../../constants/weather";

export default function PageWrapper() {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   const storeUnit = localStorage.getItem("temperatureUnit");
  //   console.log("localStorage", storeUnit);

  //   // 如果沒資料就給預設單位
  // if (!storeUnit) return localStorage.setItem("temperatureUnit", dafaultTemperatureUnit);

  //   // 有資料就存入 redux
  //   if (storeUnit === "celsius" || storeUnit === "fahrenheit")
  //     dispatch(switchUnit(storeUnit));
  // }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
