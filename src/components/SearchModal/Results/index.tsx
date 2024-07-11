import useSaveLocation from "../../../hooks/useSaveLocation";
import { ResultsProps } from "../type";
import {
  City,
  Country,
  Description,
  GeoValue,
  Image,
  ImageMobile,
  ResultItem,
  Save,
  Values,
} from "./styled";

export default function Results({
  resultDataset,
  handleChangeWeather,
}: ResultsProps) {
  if (!resultDataset || !resultDataset[0]) return;
  const saveLocation = useSaveLocation();

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
          <Description>
            <ImageMobile src={imgUrl} alt={country}></ImageMobile>
            <Country>{country}</Country>
            <GeoValue>
              ({latitude}, {longitude})
            </GeoValue>
          </Description>
        </Values>
        <Save type="button" onClick={() => saveLocation(locationDate)}>
          ⭐️
        </Save>
      </ResultItem>
    );
  });

  return results;
}
