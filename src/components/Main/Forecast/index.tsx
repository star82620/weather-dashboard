import { FormattedDaily } from "../../../constants/types/WeatherData";
import { generateWeatherIcon } from "../../../helper/generateWeatherIcon";
import {
  Date,
  CardsWrapper,
  ImageWrapper,
  Wrapper,
  ForecastTitle,
  DayCard,
  Temperature,
  Value,
} from "./styled";

type Props = { dataset: FormattedDaily[] };

export default function Forecast({ dataset }: Props) {
  if (!Array.isArray(dataset)) return null;

  console.log("forecast", dataset);

  const cards = dataset.map((card) => {
    const { time, weather_code, temperature_2m_max, temperature_2m_min } = card;
    const minTemperature = temperature_2m_min.value;
    const maxTemperature = temperature_2m_max.value;
    const temperatureUnit = temperature_2m_min.unit;
    const weatherIcon = generateWeatherIcon(weather_code);
    const formattedTime = time.toString().substring(5, 10).split("-").join("/");

    return (
      <DayCard key={time}>
        <ImageWrapper>{weatherIcon}</ImageWrapper>
        <Date>{formattedTime}</Date>
        <Temperature>
          <Value>
            {minTemperature}~{maxTemperature}
          </Value>
          {temperatureUnit}
        </Temperature>
      </DayCard>
    );
  });

  return (
    <Wrapper>
      <ForecastTitle>Forecast</ForecastTitle>
      <CardsWrapper>{cards}</CardsWrapper>
    </Wrapper>
  );
}
