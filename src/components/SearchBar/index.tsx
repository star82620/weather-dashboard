import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateCurrentLocation } from "../../redux/locationSlice";
import {
  LocationDataItem,
  ResponseData,
} from "../../constants/types/GeocodingData";
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
  const currentLocation = useAppSelector((state) => state.location.current);

  const [value, setValue] = useState<string>("");
  const [locationList, setLocationList] = useState<LocationDataItem[] | null>(
    null
  );
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const inputRef = useRef(null);

  console.log("value", value);
  console.log("currentLocation", currentLocation);

  // const fetchData = async () => {
  //   console.log("fetch");
  //   if (!value) return;
  //   try {
  //     const geocodingRes = await getGeocodeingApi(value);
  //     console.log("geo", await geocodingRes);
  //     setLocation(geocodingRes);
  //   } catch (error) {
  //     console.error("Error in useGetWeather:", error);
  //     return;
  //   }
  // };

  // 假資料
  const fetchData = () => {
    const json: ResponseData = {
      results: [
        {
          id: 1668355,
          name: "Tainan City",
          latitude: 22.99083,
          longitude: 120.21333,
          elevation: 26.0,
          feature_code: "PPLA2",
          country_code: "TW",
          admin1_id: 7280291,
          admin2_id: 1668352,
          timezone: "Asia/Taipei",
          population: 771235,
          country_id: 1668284,
          country: "Taiwan",
          admin1: "Taiwan",
          admin2: "Tainan",
        },
        {
          id: 1548565,
          name: "Tainan",
          latitude: 32.76205,
          longitude: 120.26944,
          elevation: 2.0,
          feature_code: "PPLA4",
          country_code: "CN",
          admin1_id: 1806260,
          admin2_id: 1787743,
          timezone: "Asia/Shanghai",
          country_id: 1814991,
          country: "China",
          admin1: "Jiangsu",
          admin2: "Yancheng Shi",
        },
        {
          id: 1911027,
          name: "Tainan",
          latitude: 35.74667,
          longitude: 111.76361,
          elevation: 628.0,
          feature_code: "PPL",
          country_code: "CN",
          admin1_id: 1795912,
          admin2_id: 1803566,
          timezone: "Asia/Shanghai",
          country_id: 1814991,
          country: "China",
          admin1: "Shanxi",
          admin2: "Linfen Shi",
        },
      ],
      generationtime_ms: 0.8649826,
    };
    if (!json.results) return;

    setTimeout(() => {
      setLocationList(json.results);
    }, 500);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    fetchData();
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
    console.log("result", locationList);
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

// https://open-meteo.com/images/country-flags/de.svg de->country_code
