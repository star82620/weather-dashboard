import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { useAppDispatch } from "../../hooks/redux";
import { updateCurrentLocation } from "../../redux/locationSlice";
import getLocationData from "../../helper/getGeocodingApi";
import { LocationDataItem } from "../../constants/types/GeocodingData";
import {
  Form,
  Input,
  Label,
  ResultItem,
  ResultWrapper,
  Wrapper,
} from "./styled";

export default function SearchBar() {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");
  const [locationList, setLocationList] = useState<LocationDataItem[] | null>(
    null
  );
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const inputRef = useRef(null);

  const fetchData = async (value: string) => {
    if (!value) return;
    try {
      const geocodingRes = await getLocationData(value);

      if (!geocodingRes) return;
      setLocationList(geocodingRes.results);
    } catch (error) {
      console.error("Error in useGetWeather:", error);
      return;
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    fetchData(e.target.value);
    setIsListOpen(true);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("search value:", value);
  };

  const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
    const locationData = e.currentTarget.dataset["location"];

    if (locationData) {
      const parsedData = JSON.parse(locationData);

      dispatch(updateCurrentLocation(parsedData));
      localStorage.setItem("currentLocation", locationData);
    }

    setIsListOpen(false);
  };

  const Results = () => {
    if (!locationList) return null;

    const results = locationList.map((location) => {
      const { id, name, latitude, longitude, country, country_code } = location;
      const imgUrl = `https://open-meteo.com/images/country-flags/${country_code}.svg`;
      const locationData = JSON.stringify({
        id,
        name,
        latitude,
        longitude,
        country_code,
        country,
      });
      return (
        <ResultItem key={id} data-location={locationData} onClick={handleClick}>
          <img src={imgUrl} alt={country_code} height="20" width="20" />
          <p>name:{name}</p>
          <p>country:{country}</p>
          <p>latitude:{latitude}</p>
          <p>longitude:{longitude}</p>
        </ResultItem>
      );
    });

    return <ResultWrapper $isListOpen={isListOpen}>{results}</ResultWrapper>;
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            placeholder="Search city"
            value={value}
            onChange={handleInputChange}
            ref={inputRef}
          />
        </Label>
      </Form>
      <Results />
    </Wrapper>
  );
}
