import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import getGeocodeingApi from "../../helper/getGeocodingApi";
import {
  Form,
  Input,
  Label,
  ResultItem,
  ResultWrapper,
  Wrapper,
} from "./styled";
import {
  LocationDataItem,
  ResponseData,
} from "../../constants/types/GeocodingData";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateCurrentLocation } from "../../redux/locationSlice";

// const debounce = (callback, delay = 250) => {
//   let timerId;

//   console.log("timerId", timerId);

//   const executeFunc = (...args) => {
//     console.log("L");
//     // 清除先前的計時器，以確保 callback 只在延遲時間後調用一次
//     clearTimeout(timerId);
//     // 設置新的計時器
//     timerId = setTimeout(() => {
//       // 延遲時間到後執行回調函數
//       callback(...args);
//     }, delay);
//   };

//   return executeFunc;
// };

export default function SearchBar() {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<LocationDataItem[] | null>(
    null
  );
  const currentLocation = useAppSelector((state) => state.location.current);
  // const [currentLocation, setCurrentLocation] = useState(null);

  console.log("value", value);
  console.log("currentLocation", currentLocation);

  // const [location, setLocation] = useState<ResponseData | null>(null);

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
      setSearchResult(json.results);
    }, 500);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    fetchData();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("search value:", value);
  };

  const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
    const locationData = e.currentTarget.dataset["location"];

    if (locationData) {
      const parsedData = JSON.parse(locationData);
      // 把現在搜尋的城市存起來，之後要再加一個存到 localStorage
      dispatch(updateCurrentLocation(parsedData));
    }
  };

  const Results = () => {
    console.log("result", searchResult);
    if (!searchResult) return null;

    const results = searchResult.map((location) => {
      const { id, name, latitude, longitude, country_code, admin1 } = location;
      const imgUrl = `https://open-meteo.com/images/country-flags/${country_code}.svg`;
      const locationData = JSON.stringify({
        id,
        name,
        latitude,
        longitude,
        country_code,
        admin1,
      });
      return (
        <ResultItem key={id} data-location={locationData} onClick={handleClick}>
          <img src={imgUrl} alt={country_code} height="20" width="20" />
          <p>name:{name}</p>
          <p>admin1:{admin1}</p>
          <p>latitude:{latitude}</p>
          <p>longitude:{longitude}</p>
        </ResultItem>
      );
    });

    return <ResultWrapper>{results}</ResultWrapper>;
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
          />
        </Label>
      </Form>
      <Results />
    </Wrapper>
  );
}

// https://open-meteo.com/images/country-flags/de.svg de->country_code
