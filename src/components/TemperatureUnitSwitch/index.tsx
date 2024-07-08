import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switchUnit } from "../../redux/temperatureUnitSlice";
import { Button, Wrapper } from "./styled";

export default function TemperatureUnitSwitch() {
  const active = useAppSelector((state) => state.temperatureUnit.value);
  const dispatch = useAppDispatch();

  const isCelsius = active === "celsius";
  const isFahrenheit = active === "fahrenheit";

  const handleSwitch = () => {
    if (active === "celsius") {
      return dispatch(switchUnit("fahrenheit"));
    }
    dispatch(switchUnit("celsius"));
  };

  return (
    <Wrapper onClick={handleSwitch}>
      <Button $isActive={isCelsius}>℃</Button>
      <Button $isActive={isFahrenheit}>℉</Button>
    </Wrapper>
  );
}
