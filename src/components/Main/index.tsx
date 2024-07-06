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
} from "./styled";

export default function Main() {
  return (
    <Wrapper>
      <CurrentWeather>
        <Time>07/06 18:13</Time>

        <Location>
          <City>Tainan</City>
          <Country>Taiwan</Country>
        </Location>

        <Temperature $unit="℃">
          <Content>32</Content>
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
      </CurrentWeather>
    </Wrapper>
  );
}
