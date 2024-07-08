import { WeatherCodes } from "./types/WeatherCodes";
import { weatherIcons } from "./imagePaths";

export const dafaultTemperatureUnit = "celsius";

export const weatherCodes: WeatherCodes = {
  "0": {
    day: {
      description: "Sunny",
      image: weatherIcons["01"].src.day,
    },
    night: {
      description: "Clear",
      image: weatherIcons["01"].src.night,
    },
  },
  "1": {
    day: {
      description: "Mainly Sunny",
      image: weatherIcons["01"].src.day,
    },
    night: {
      description: "Mainly Clear",
      image: weatherIcons["01"].src.night,
    },
  },
  "2": {
    day: {
      description: "Partly Cloudy",
      image: weatherIcons["02"].src.day,
    },
    night: {
      description: "Partly Cloudy",
      image: weatherIcons["02"].src.night,
    },
  },
  "3": {
    day: {
      description: "Cloudy",
      image: weatherIcons["03"].src.day,
    },
    night: {
      description: "Cloudy",
      image: weatherIcons["03"].src.night,
    },
  },
  "45": {
    day: {
      description: "Foggy",
      image: weatherIcons["50"].src.day,
    },
    night: {
      description: "Foggy",
      image: weatherIcons["50"].src.night,
    },
  },
  "48": {
    day: {
      description: "Rime Fog",
      image: weatherIcons["50"].src.day,
    },
    night: {
      description: "Rime Fog",
      image: weatherIcons["03"].src.night,
    },
  },
  "51": {
    day: {
      description: "Light Drizzle",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Light Drizzle",
      image: weatherIcons["09"].src.night,
    },
  },
  "53": {
    day: {
      description: "Drizzle",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Drizzle",
      image: weatherIcons["09"].src.night,
    },
  },
  "55": {
    day: {
      description: "Heavy Drizzle",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Heavy Drizzle",
      image: weatherIcons["09"].src.night,
    },
  },
  "56": {
    day: {
      description: "Light Freezing Drizzle",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Light Freezing Drizzle",
      image: weatherIcons["09"].src.night,
    },
  },
  "57": {
    day: {
      description: "Freezing Drizzle",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Freezing Drizzle",
      image: weatherIcons["09"].src.night,
    },
  },
  "61": {
    day: {
      description: "Light Rain",
      image: weatherIcons["10"].src.day,
    },
    night: {
      description: "Light Rain",
      image: weatherIcons["10"].src.night,
    },
  },
  "63": {
    day: {
      description: "Rain",
      image: weatherIcons["10"].src.day,
    },
    night: {
      description: "Rain",
      image: weatherIcons["10"].src.night,
    },
  },
  "65": {
    day: {
      description: "Heavy Rain",
      image: weatherIcons["10"].src.day,
    },
    night: {
      description: "Heavy Rain",
      image: weatherIcons["10"].src.night,
    },
  },
  "66": {
    day: {
      description: "Light Freezing Rain",
      image: weatherIcons["10"].src.day,
    },
    night: {
      description: "Light Freezing Rain",
      image: weatherIcons["10"].src.night,
    },
  },
  "67": {
    day: {
      description: "Freezing Rain",
      image: weatherIcons["10"].src.day,
    },
    night: {
      description: "Freezing Rain",
      image: weatherIcons["10"].src.night,
    },
  },
  "71": {
    day: {
      description: "Light Snow",
      image: weatherIcons["13"].src.day,
    },
    night: {
      description: "Light Snow",
      image: weatherIcons["13"].src.night,
    },
  },
  "73": {
    day: {
      description: "Snow",
      image: weatherIcons["13"].src.day,
    },
    night: {
      description: "Snow",
      image: weatherIcons["13"].src.night,
    },
  },
  "75": {
    day: {
      description: "Heavy Snow",
      image: weatherIcons["13"].src.day,
    },
    night: {
      description: "Heavy Snow",
      image: weatherIcons["13"].src.night,
    },
  },
  "77": {
    day: {
      description: "Snow Grains",
      image: weatherIcons["13"].src.day,
    },
    night: {
      description: "Snow Grains",
      image: weatherIcons["13"].src.night,
    },
  },
  "80": {
    day: {
      description: "Light Showers",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Light Showers",
      image: weatherIcons["09"].src.night,
    },
  },
  "81": {
    day: {
      description: "Showers",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Showers",
      image: weatherIcons["09"].src.night,
    },
  },
  "82": {
    day: {
      description: "Heavy Showers",
      image: weatherIcons["09"].src.day,
    },
    night: {
      description: "Heavy Showers",
      image: weatherIcons["09"].src.night,
    },
  },
  "85": {
    day: {
      description: "Light Snow Showers",
      image: weatherIcons["13"].src.day,
    },
    night: {
      description: "Light Snow Showers",
      image: weatherIcons["13"].src.night,
    },
  },
  "86": {
    day: {
      description: "Snow Showers",
      image: weatherIcons["13"].src.day,
    },
    night: {
      description: "Snow Showers",
      image: weatherIcons["13"].src.night,
    },
  },
  "95": {
    day: {
      description: "Thunderstorm",
      image: weatherIcons["11"].src.day,
    },
    night: {
      description: "Thunderstorm",
      image: weatherIcons["11"].src.night,
    },
  },
  "96": {
    day: {
      description: "Light Thunderstorms With Hail",
      image: weatherIcons["03"].src.day,
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image: weatherIcons["11"].src.night,
    },
  },
  "99": {
    day: {
      description: "Thunderstorm With Hail",
      image: weatherIcons["03"].src.day,
    },
    night: {
      description: "Thunderstorm With Hail",
      image: weatherIcons["11"].src.night,
    },
  },
};
