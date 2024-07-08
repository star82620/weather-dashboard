import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import { Button, Wrapper } from "./styled";

export default function TemperatureUnitSwitch() {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.temperatureUnit.value);

  console.log("redux", active);

  const isCelsius = active === "celsius";
  const isFahrenheit = active === "fahrenheit";

  const handleSwitch = () => {
    if (active === "celsius") {
      dispatch(switchUnit("fahrenheit"));
      localStorage.setItem("temperatureUnit", "fahrenheit");
      return;
    }
    dispatch(switchUnit("celsius"));
    localStorage.setItem("temperatureUnit", "celsius");
  };

  return (
    <Wrapper onClick={handleSwitch}>
      <Button $isActive={isCelsius}>℃</Button>
      <Button $isActive={isFahrenheit}>℉</Button>
    </Wrapper>
  );
}
