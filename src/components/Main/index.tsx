import { formatWeatherData } from "../../helper/formatWeatherData";
import CurrentWeather from "./CurrentWeather";
import {
  FormattedDaily,
  ResponseData,
} from "../../constants/types/WeatherData";
import { TemperatureValue } from "../../constants/style/commonStyled";
import {
  Wrapper,
  Forecast,
  DayCard,
  DateText,
  ForecastTitle,
  CardsWrapper,
  ImageWrapper,
} from "./styled";
import { generateWeatherIcon } from "../../helper/generateWeatherIcon";

type CardsProps = { dataset: FormattedDaily[] };

const Cards = ({ dataset }: CardsProps) => {
  if (!Array.isArray(dataset)) return null;

  const cards = dataset.map((card) => {
    const { time, weather_code, temperature_2m_max, temperature_2m_min } = card;
    const minTemperature = temperature_2m_min.value;
    const maxTemperature = temperature_2m_max.value;
    const weatherIcon = generateWeatherIcon(weather_code);

    return (
      <DayCard key={time}>
        <ImageWrapper>{weatherIcon}</ImageWrapper>
        <DateText>{time}</DateText>
        <TemperatureValue $unit="℃">
          {minTemperature}~{maxTemperature}
        </TemperatureValue>
      </DayCard>
    );
  });

  return <CardsWrapper>{cards}</CardsWrapper>;
};

const dataset: ResponseData = {
  latitude: 25.0,
  longitude: 121.0,
  generationtime_ms: 0.1379251480102539,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 0.0,
  current_units: {
    time: "iso8601",
    interval: "seconds",
    temperature_2m: "°C",
    relative_humidity_2m: "%",
    is_day: "",
    weather_code: "wmo code",
    wind_speed_10m: "km/h",
  },
  current: {
    time: "2024-07-07T03:00",
    interval: 900,
    temperature_2m: 30.3,
    relative_humidity_2m: 773,
    is_day: 1,
    weather_code: 1,
    wind_speed_10m: 12.3,
  },
  daily_units: {
    time: "iso8601",
    weather_code: "wmo code",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
  },
  daily: {
    time: [
      "2024-07-07",
      "2024-07-08",
      "2024-07-09",
      "2024-07-10",
      "2024-07-11",
    ],
    weather_code: [1, 2, 95, 80, 3],
    temperature_2m_max: [30.4, 30.2, 30.2, 32.5, 32.6],
    temperature_2m_min: [27.2, 27.1, 27.0, 28.6, 28.9],
  },
};

export default function Main() {
  const formattedData = formatWeatherData(dataset);

  const city = "Taipei";
  const { current, forecasts } = formattedData;

  console.log(forecasts);

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
