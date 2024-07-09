import { generateWeatherIcon } from "../../../helper/generateWeatherIcon";
import { FormattedLocation } from "../../../constants/types/GeocodingData";
import { FormattedCurrent } from "../../../constants/types/WeatherData";
import { weatherValues } from "./data";
import {
  Wrapper,
  Content,
  Location,
  TextContainer,
  Title,
  WeatherIcon,
  Unit,
  ValueContainer,
} from "./styled";

type Props = {
  dataset: FormattedCurrent;
  location: FormattedLocation;
};

export default function CurrentWeather({ dataset, location }: Props) {
  const { weather_code, is_day } = dataset;

  const { name: cityName, country } = location;

  const isDay = !!is_day;
  const weatherIcon = generateWeatherIcon(weather_code, isDay);

  return (
    <Wrapper>
      <WeatherIcon>{weatherIcon}</WeatherIcon>

      <Location>
        <Content>{cityName}</Content>
        <Title>{country}</Title>
      </Location>

      <ValueContainer>
        {weatherValues.map((value) => {
          const { key, title } = value;

          return (
            <TextContainer key={title}>
              <Content>
                {dataset[key].value}
                <Unit>{dataset[key].unit}</Unit>
              </Content>
              <Title>{title}</Title>
            </TextContainer>
          );
        })}
      </ValueContainer>
    </Wrapper>
  );
}
