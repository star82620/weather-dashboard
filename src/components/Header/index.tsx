import SearchBar from "../SearchBar";
import TemperatureUnitSwitch from "../TemperatureUnitSwitch";
import { Wrapper } from "./styled";

export default function Header() {
  return (
    <Wrapper>
      <SearchBar />
      <TemperatureUnitSwitch />
    </Wrapper>
  );
}
