import { ResultsProps } from "../type";
import {
  City,
  Country,
  GeoValue,
  Image,
  ResultItem,
  Save,
  Values,
} from "./styled";

export default function Results({
  resultDataset,
  handleChangeWeather,
}: ResultsProps) {
  if (!resultDataset || !resultDataset[0]) return;

  const results = resultDataset.map((data) => {
    const { id, name, latitude, longitude, country, country_code } = data;
    const imgUrl = `https://open-meteo.com/images/country-flags/${country_code}.svg`;
    const locationDate = {
      id,
      name,
      latitude,
      longitude,
      country_code,
      country,
    };
    const locationDataString = JSON.stringify(locationDate);

    return (
      <ResultItem
        key={id}
        data-location={locationDataString}
        onClick={handleChangeWeather}
      >
        <Image src={imgUrl} alt={country}></Image>
        <Values>
          <City>{name}</City>
          <Country>{country}</Country>
          <GeoValue>
            ({latitude}, {longitude})
          </GeoValue>
        </Values>
        <Save>⭐️</Save>
      </ResultItem>
    );
  });

  return results;
}
