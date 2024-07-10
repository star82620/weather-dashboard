import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { getWeatherApi } from "../../helper/getWeatherApi";
import { formatWeatherData } from "../../helper/formatWeatherData";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { FormattedData } from "../../constants/types/WeatherData";
import { Wrapper } from "./styled";
import Loading from "../Loading";

type WeatherData = FormattedData | null;

export default function Main() {
  const [weatherData, setWeatherData] = useState<WeatherData>(null);

  const temperatureUnit = useAppSelector(
    (state) => state.temperatureUnit.value
  );
  const currentLocation = useAppSelector((state) => state.location.current);
  const { latitude, longitude } = currentLocation;
  const location = {
    latitude,
    longitude,
  };

  const fetchData = async () => {
    try {
      const weatherRes = await getWeatherApi(location, temperatureUnit);

      if (!weatherRes) return;

      const formattedData = await formatWeatherData(weatherRes);

      return setWeatherData(await formattedData);
    } catch (error) {
      console.error("Error in useGetWeather:", error);
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentLocation]);

  useEffect(() => {
    if (isNaN(Number(latitude)) || isNaN(Number(longitude)))
      return alert("錯誤");
    fetchData();
  }, [temperatureUnit]);

  if (!weatherData) return <Loading />;

  const { current, forecasts } = weatherData;

  return (
    <Wrapper>
      <CurrentWeather dataset={current} location={currentLocation} />
      <Forecast dataset={forecasts} />
    </Wrapper>
  );
}
