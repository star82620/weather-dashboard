import { ActiveThemeProps } from "../../constants/types/Theme";
import SearchBar from "../SearchBar";
import TemperatureUnitSwitch from "../TemperatureUnitSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { Wrapper } from "./styled";

export default function Header({
  activeTheme,
  setActiveTheme,
}: ActiveThemeProps) {
  return (
    <Wrapper>
      <SearchBar />
      <TemperatureUnitSwitch />
      <ThemeSwitch activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
    </Wrapper>
  );
}
