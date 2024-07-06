type WeatherCodeDetails = {
  description: string;
  image: string;
};

type WeatherCode = {
  day: WeatherCodeDetails;
  night: WeatherCodeDetails;
};

export type WeatherCodes = {
  [key: string]: WeatherCode;
};
