import { FormattedDaily } from "../../constants/types/WeatherData";
import { generateWeatherIcon } from "../../helper/generateWeatherIcon";
import {
  CardContainer,
  DateText,
  CardsWrapper,
  ImageWrapper,
  Forecast,
  ForecastTitle,
  DayCard,
  Temperature,
} from "./styled";

type Props = { dataset: FormattedDaily[] };

export default function Cards({ dataset }: Props) {
  if (!Array.isArray(dataset)) return null;

  console.log("forecast", dataset);

  const cards = dataset.map((card) => {
    const { time, weather_code, temperature_2m_max, temperature_2m_min } = card;
    const minTemperature = temperature_2m_min.value;
    const maxTemperature = temperature_2m_max.value;
    const temperatureUnit = temperature_2m_min.unit;
    const weatherIcon = generateWeatherIcon(weather_code);

    return (
      <DayCard key={time}>
        <CardContainer>
          <ImageWrapper>{weatherIcon}</ImageWrapper>
          <DateText>{time}</DateText>
          <Temperature>
            {minTemperature}~{maxTemperature}
            {temperatureUnit}
          </Temperature>
        </CardContainer>
      </DayCard>
    );
  });

  return (
    <Forecast>
      <ForecastTitle>Forecast</ForecastTitle>
      <CardsWrapper>{cards}</CardsWrapper>
    </Forecast>
  );
}
