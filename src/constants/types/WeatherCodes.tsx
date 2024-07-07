type WeatherCodeItem = {
  description: string;
  image: string;
};

type WeatherCode = {
  day: WeatherCodeItem;
  night: WeatherCodeItem;
};

export type WeatherCodes = Record<string, WeatherCode>;
