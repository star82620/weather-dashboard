import { ActiveThemeProps } from "../../../constants/types/Theme";
import { Wrapper, Button } from "./styled";

export default function ThemeSwitch({
  activeTheme,
  setActiveTheme,
}: ActiveThemeProps) {
  const handleSwitchTheme = () => {
    if (activeTheme === "dark") return setActiveTheme("light");

    setActiveTheme("dark");
  };

  const isLightActive = activeTheme === "light";
  const isDarkActive = activeTheme === "dark";

  return (
    <Wrapper onClick={handleSwitchTheme}>
      <Button type="button" $isActive={isLightActive}>
        light
      </Button>
      <Button type="button" $isActive={isDarkActive}>
        dark
      </Button>
    </Wrapper>
  );
}
