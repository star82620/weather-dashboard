import { generateWeatherIcon } from "../../../helper/generateWeatherIcon";
import { FormattedLocation } from "../../../constants/types/GeocodingData";
import { FormattedCurrent } from "../../../constants/types/WeatherData";
import { TemperatureValue } from "../../../constants/style/commonStyled";
import {
  Wrapper,
  City,
  Country,
  Content,
  Humidity,
  Location,
  Temperature,
  Time,
  Title,
  WindSpeed,
  WeatherIcon,
} from "./styled";
import Card from "../../Card";

type CurrentWeatherProps = {
  dataset: FormattedCurrent;
  location: FormattedLocation;
};

export default function CurrentWeather({
  dataset,
  location,
}: CurrentWeatherProps) {
  const {
    time, //更新時間
    weather_code,
    is_day,
    temperature_2m,
    relative_humidity_2m,
    wind_speed_10m,
  } = dataset;

  const { name: cityName, country } = location;

  const isDay = !!is_day;
  const weatherIcon = generateWeatherIcon(weather_code, isDay);
  const temperatureUnit = temperature_2m.unit;

  return (
    <Card>
      <Wrapper>
        {/* <Time>{time}</Time> */}
        <WeatherIcon>{weatherIcon}</WeatherIcon>
        <Location>
          <City>{cityName}</City>
          <Country>{country}</Country>
        </Location>
        <Temperature>
          <TemperatureValue $unit={temperatureUnit}>
            {temperature_2m.value}
          </TemperatureValue>
          <Title>Temperature</Title>
        </Temperature>
        <Humidity>
          <Content>
            {relative_humidity_2m.value}
            {relative_humidity_2m.unit}
          </Content>
          <Title>Humidity</Title>
        </Humidity>
        <WindSpeed>
          <Content>
            {wind_speed_10m.value}
            {wind_speed_10m.unit}
          </Content>
          <Title>Wind Speed</Title>
        </WindSpeed>
      </Wrapper>
    </Card>
  );
}
