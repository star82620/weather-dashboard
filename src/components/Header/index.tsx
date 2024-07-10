import { MouseEventHandler } from "react";
import { ActiveThemeProps } from "../../constants/types/Theme";
import { useAppDispatch } from "../../hooks/redux";
import { updateSearchModal } from "../../redux/modalSlice";
import TemperatureUnitSwitch from "./TemperatureUnitSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { Container, Image, Logo, SearchButton, Wrapper } from "./styled";

export default function Header({
  activeTheme,
  setActiveTheme,
}: ActiveThemeProps) {
  const dispatch = useAppDispatch();

  const handleSearch: MouseEventHandler = () => {
    dispatch(updateSearchModal(true));
  };

  return (
    <Wrapper>
      <Logo>
        <Image src={"/logo.png"} alt="Weather Dashboard" />
        Weather Dashboard
      </Logo>
      <Container>
        <SearchButton type="button" onClick={handleSearch}>
          🔍 Search
        </SearchButton>
        <TemperatureUnitSwitch />
        <ThemeSwitch
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
        />
      </Container>
    </Wrapper>
  );
}
