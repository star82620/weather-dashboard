import { FormattedDaily } from "../../constants/types/WeatherData";
import { TemperatureValue } from "../../constants/style/commonStyled";
import { generateWeatherIcon } from "../../helper/generateWeatherIcon";
import { CardContainer, DateText, CardsWrapper, ImageWrapper } from "./styled";
import Card from "../Card";

type CardsProps = { dataset: FormattedDaily[] };

export default function Cards({ dataset }: CardsProps) {
  if (!Array.isArray(dataset)) return null;

  const cards = dataset.map((card) => {
    const { time, weather_code, temperature_2m_max, temperature_2m_min } = card;
    const minTemperature = temperature_2m_min.value;
    const maxTemperature = temperature_2m_max.value;
    const weatherIcon = generateWeatherIcon(weather_code);
    const temperatureUnit = temperature_2m_min.unit;

    return (
      <Card key={time}>
        <CardContainer>
          <ImageWrapper>{weatherIcon}</ImageWrapper>
          <DateText>{time}</DateText>
          <TemperatureValue $unit={temperatureUnit}>
            {minTemperature}~{maxTemperature}
          </TemperatureValue>
        </CardContainer>
      </Card>
    );
  });

  return <CardsWrapper>{cards}</CardsWrapper>;
}
