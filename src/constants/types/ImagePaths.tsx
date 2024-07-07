export type WeatherIcon = {
  alt: string;
  src: {
    day: string;
    night: string;
  };
};

export type WeatherIcons = Record<string, WeatherIcon>;
