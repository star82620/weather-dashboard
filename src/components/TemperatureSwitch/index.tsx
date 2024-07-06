import { useState } from "react";
import { Button, Wrapper } from "./styled";

export default function TemperatureSwitch() {
  const [active, setActive] = useState<"Celsius" | "Fahrenheit">("Celsius");

  const isCelsius = active === "Celsius";
  const isFahrenheit = active === "Fahrenheit";

  const handleSwitch = () => {
    if (active === "Celsius") {
      return setActive("Fahrenheit");
    }
    setActive("Celsius");

    // 要存 cookie
  };

  return (
    <Wrapper onClick={handleSwitch}>
      <Button $isActive={isCelsius}>℃</Button>
      <Button $isActive={isFahrenheit}>℉</Button>
    </Wrapper>
  );
}
