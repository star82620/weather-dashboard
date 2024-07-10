import { MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateCurrentLocation } from "../../redux/locationSlice";
import { FormattedLocation } from "../../constants/types/GeocodingData";
import { Container, Card, Image, Text, Wrapper, Title } from "./styled";

// 儲存的地點列表
export default function SavedList() {
  const dispatch = useAppDispatch();

  const savedLocations = useAppSelector((state) => state.location.saved);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const value = e.currentTarget.dataset["location"];

    if (!value) return;

    const parsedValue: FormattedLocation = JSON.parse(value);

    dispatch(updateCurrentLocation(parsedValue));
    localStorage.setItem("currentLocation", value);
  };

  const Lists = () => {
    if (!savedLocations) return null;

    const contents = savedLocations.map((location) => {
      const { id, name, country_code, country } = location;
      const locationString = JSON.stringify(location);
      const countryImgUrl = `https://open-meteo.com/images/country-flags/${country_code}.svg`;

      return (
        <Card
          key={id}
          type="button"
          data-location={locationString}
          onClick={handleClick}
        >
          <Image src={countryImgUrl} alt={country} />
          <Text>{name}</Text>
        </Card>
      );
    });

    return <Container>{contents}</Container>;
  };

  return (
    <Wrapper>
      <Title>Saved Location</Title>
      <Lists />
    </Wrapper>
  );
}
