import SearchBar from "../SearchBar";
import TemperatureSwitch from "../TemperatureSwitch";
import { Wrapper } from "./styled";

export default function Header() {
  return (
    <Wrapper>
      <SearchBar />
      <TemperatureSwitch />
    </Wrapper>
  );
}
