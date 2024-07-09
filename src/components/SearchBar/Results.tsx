import { MouseEventHandler } from "react";
import { LocationDataItem } from "../../constants/types/GeocodingData";
import useSaveLocation from "../../hooks/useSaveLocation";
import { ResultItem, ResultWrapper } from "./styled";

type Props = {
  locationList: LocationDataItem[] | null;
  isListOpen: boolean;
  handleClick: MouseEventHandler;
};

export default function Results({
  locationList,
  handleClick,
  isListOpen,
}: Props) {
  const saveLocation = useSaveLocation();

  if (!locationList)
    return <ResultWrapper $isListOpen={isListOpen}>loading</ResultWrapper>;

  const results = locationList.map((location) => {
    const { id, name, latitude, longitude, country, country_code } = location;
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
        onClick={handleClick}
      >
        <img src={imgUrl} alt={country_code} height="20" width="20" />
        <p>name:{name}</p>
        <p>country:{country}</p>
        <p>latitude:{latitude}</p>
        <p>longitude:{longitude}</p>
        <button type="button" onClick={() => saveLocation(locationDate)}>
          save
        </button>
      </ResultItem>
    );
  });

  return <ResultWrapper $isListOpen={isListOpen}>{results}</ResultWrapper>;
}
