import { TemperatureValue } from "../../constants/style/commonStyled";
import {
  City,
  Country,
  Content,
  CurrentWeather,
  Humidity,
  Location,
  Temperature,
  Time,
  Title,
  WindSpeed,
  Wrapper,
  Forecast,
  DayCard,
  DateText,
  ForecastTitle,
  Image,
} from "./styled";

const CurrentWeatherSection = () => (
  <CurrentWeather>
    <Time>07/06 18:13</Time>
    <Location>
      <City>Tainan</City>
      <Country>Taiwan</Country>
    </Location>
    <Temperature>
      <TemperatureValue $unit="℃">32</TemperatureValue>
      <Title>Temperature</Title>
    </Temperature>
    <Humidity>
      <Content>30%</Content>
      <Title>Humidity</Title>
    </Humidity>
    <WindSpeed>
      <Content>4 km/hr</Content>
      <Title>Wind Speed</Title>
    </WindSpeed>
    <Image src="/public/images/weather_code/02d@2x.png" alt="02d" />
  </CurrentWeather>
);

const Cards = () => {
  return Array.from({ length: 5 }, (_, i) => (
    <DayCard>
      <Image src={"/public/images/weather_code/02d@2x.png"} alt="weather-02d" />
      <DateText>07/07</DateText>
      <TemperatureValue $unit="℃">32</TemperatureValue>
    </DayCard>
  ));
};

export default function Main() {
  return (
    <Wrapper>
      <CurrentWeatherSection />
      <Forecast>
        <ForecastTitle>5 Days Forecast</ForecastTitle>
        <Cards />
      </Forecast>
    </Wrapper>
  );
}
