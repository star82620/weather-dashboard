import { ActiveThemeProps } from "../../constants/types/Theme";

import TemperatureUnitSwitch from "../TemperatureUnitSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { SearchButton, Wrapper } from "./styled";

export default function Header({
  activeTheme,
  setActiveTheme,
}: ActiveThemeProps) {
  return (
    <Wrapper>
      <SearchButton>🔍</SearchButton>
      <TemperatureUnitSwitch />
      <ThemeSwitch activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
    </Wrapper>
  );
}
