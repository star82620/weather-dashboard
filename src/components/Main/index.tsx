import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { getWeatherApi } from "../../helper/getWeatherApi";
import { formatWeatherData } from "../../helper/formatWeatherData";
import CurrentWeather from "./CurrentWeather";
import Cards from "./Cards";
import { FormattedData } from "../../constants/types/WeatherData";
import { Wrapper, Forecast, ForecastTitle } from "./styled";

type WeatherData = FormattedData | null;

export default function Main() {
  const [weatherData, setWeatherData] = useState<WeatherData>(null);

  const temperatureUnit = useAppSelector(
    (state) => state.temperatureUnit.value
  );

  // 之後也要抓資料傳入
  const location = { latitude: 15, longitude: 121 };

  useEffect(() => {
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

    fetchData();
  }, [temperatureUnit]);

  if (!weatherData) return null;

  const city = `Taipei,${location.latitude},${location.longitude}`;
  const { current, forecasts } = weatherData;

  return (
    <Wrapper>
      <CurrentWeather dataset={current} location={city} />
      <Forecast>
        <ForecastTitle>5 Days Forecast</ForecastTitle>
        <Cards dataset={forecasts} />
      </Forecast>
    </Wrapper>
  );
}
