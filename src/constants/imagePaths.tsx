import { WeatherIcons } from "./types/ImagePaths";
import weatherIcon01Day from "../assets/images/weather_icons/01d@2x.png";
import weatherIcon01Night from "../assets/images/weather_icons/01n@2x.png";
import weatherIcon02Day from "../assets/images/weather_icons/02d@2x.png";
import weatherIcon02Night from "../assets/images/weather_icons/02n@2x.png";
import weatherIcon03Day from "../assets/images/weather_icons/03d@2x.png";
import weatherIcon03Night from "../assets/images/weather_icons/03n@2x.png";
import weatherIcon09Day from "../assets/images/weather_icons/09d@2x.png";
import weatherIcon09Night from "../assets/images/weather_icons/09n@2x.png";
import weatherIcon10Day from "../assets/images/weather_icons/10d@2x.png";
import weatherIcon10Night from "../assets/images/weather_icons/10n@2x.png";
import weatherIcon11Day from "../assets/images/weather_icons/11d@2x.png";
import weatherIcon11Night from "../assets/images/weather_icons/11n@2x.png";
import weatherIcon13Day from "../assets/images/weather_icons/13d@2x.png";
import weatherIcon13Night from "../assets/images/weather_icons/13n@2x.png";
import weatherIcon50Day from "../assets/images/weather_icons/50d@2x.png";
import weatherIcon50Night from "../assets/images/weather_icons/50n@2x.png";

export const weatherIcons: WeatherIcons = {
  "01": {
    alt: "clear sky",
    src: {
      day: weatherIcon01Day,
      night: weatherIcon01Night,
    },
  },
  "02": {
    alt: "few clouds",
    src: {
      day: weatherIcon02Day,
      night: weatherIcon02Night,
    },
  },
  "03": {
    alt: "scattered clouds",
    src: {
      day: weatherIcon03Day,
      night: weatherIcon03Night,
    },
  },
  "09": {
    alt: "shower rain",
    src: {
      day: weatherIcon09Day,
      night: weatherIcon09Night,
    },
  },
  "10": {
    alt: "rain",
    src: {
      day: weatherIcon10Day,
      night: weatherIcon10Night,
    },
  },
  "11": {
    alt: "thunderstorm",
    src: {
      day: weatherIcon11Day,
      night: weatherIcon11Night,
    },
  },
  "13": {
    alt: "snow",
    src: {
      day: weatherIcon13Day,
      night: weatherIcon13Night,
    },
  },
  "50": {
    alt: "mist",
    src: {
      day: weatherIcon50Day,
      night: weatherIcon50Night,
    },
  },
};
