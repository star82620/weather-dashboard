import { weatherCodes } from "../constants/weather";
import { Image } from "../constants/style/commonStyled";

export const generateWeatherIcon = (
  weather_code: number,
  isDay?: boolean | undefined
) => {
  const dayCategory = isDay === false ? "night" : "day";
  const weatherIcon = weatherCodes[weather_code][dayCategory];
  const src = weatherIcon.image;
  const alt = weatherIcon.description;

  return <Image src={src} alt={alt} />;
};
