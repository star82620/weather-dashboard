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
} from "./styled";

export default function CurrentWeather() {
  return (
    <Wrapper>
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
      {/* <Image src="/public/images/weather_code/02d@2x.png" alt="02d" /> */}
    </Wrapper>
  );
}
