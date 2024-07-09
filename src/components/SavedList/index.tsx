import { useAppSelector } from "../../hooks/redux";
import { Container, Location, Image, Text, Wrapper } from "./styled";

export default function SavedList() {
  const savedLocations = useAppSelector((state) => state.location.saved);

  const Lists = () => {
    if (!savedLocations) return null;

    const contents = savedLocations.map((location) => {
      const { name: cityName, country_code, country } = location;
      const countryImgUrl = `https://open-meteo.com/images/country-flags/${country_code}.svg`;
      return (
        <Location>
          <Image src={countryImgUrl} alt={country} />
          <Text>{cityName}</Text>
        </Location>
      );
    });

    return <Container>{contents}</Container>;
  };

  return (
    <Wrapper>
      <Lists />
    </Wrapper>
  );
}
