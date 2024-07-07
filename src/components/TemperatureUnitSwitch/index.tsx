import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import { Button, Wrapper } from "./styled";

export default function TemperatureUnitSwitch() {
  const active = useAppSelector((state) => state.temperatureUnit.value);
  const dispatch = useAppDispatch();

  const isCelsius = active === "Celsius";
  const isFahrenheit = active === "Fahrenheit";

  const handleSwitch = () => {
    if (active === "Celsius") {
      return dispatch(switchUnit("Fahrenheit"));
    }
    dispatch(switchUnit("Celsius"));
  };

  return (
    <Wrapper onClick={handleSwitch}>
      <Button $isActive={isCelsius}>℃</Button>
      <Button $isActive={isFahrenheit}>℉</Button>
    </Wrapper>
  );
}
