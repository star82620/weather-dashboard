type Key = "temperature_2m" | "relative_humidity_2m" | "wind_speed_10m";
type WeatherValues = { key: Key; title: string }[];

export const weatherValues: WeatherValues = [
  {
    key: "temperature_2m",
    title: "Temperature",
  },
  { key: "relative_humidity_2m", title: "Humidity" },
  { key: "wind_speed_10m", title: "Wind Speed" },
];
