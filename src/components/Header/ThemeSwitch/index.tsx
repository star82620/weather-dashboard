import { ActiveThemeProps } from "../../../constants/types/Theme";
import { Wrapper, Button } from "./styled";

export default function ThemeSwitch({
  activeTheme,
  setActiveTheme,
}: ActiveThemeProps) {
  const handleSwitchTheme = () => {
    if (activeTheme === "dark") {
      setActiveTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
      return;
    }

    setActiveTheme("dark");
    localStorage.setItem("theme", JSON.stringify("dark"));
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
