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
import Results from "./Results";
import { Form, Input, Label, Wrapper } from "./styled";

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

      <Results
        locationList={locationList}
        isListOpen={isListOpen}
        handleClick={handleClick}
      />
    </Wrapper>
  );
}
