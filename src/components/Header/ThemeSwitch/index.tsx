import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { updateTheme } from "../../../redux/themeSlice";
import { Wrapper, Button } from "./styled";

export default function ThemeSwitch() {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector((state) => state.theme.active);

  const handleSwitchTheme = () => {
    if (activeTheme === "dark") {
      dispatch(updateTheme("light"));
      localStorage.setItem("theme", JSON.stringify("light"));
      return;
    }

    dispatch(updateTheme("dark"));
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
