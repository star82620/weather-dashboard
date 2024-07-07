import { ResponseData, FormattedData } from "../constants/types/WeatherData";

export function formatWeatherData(dataset: ResponseData) {
  const { latitude, longitude, current_units, current, daily_units, daily } =
    dataset;

  const location = {
    latitude,
    longitude,
  };

  const {
    time,
    weather_code,
    is_day,
    temperature_2m,
    relative_humidity_2m,
    wind_speed_10m,
  } = current;

  const formattedCurrent = {
    time,
    weather_code,
    is_day,
    temperature_2m: {
      value: temperature_2m,
      unit: current_units["temperature_2m"],
    },
    relative_humidity_2m: {
      value: relative_humidity_2m,
      unit: current_units["relative_humidity_2m"],
    },
    wind_speed_10m: {
      value: wind_speed_10m,
      unit: current_units["wind_speed_10m"],
    },
  };

  const formattedDaily = daily.time.map((time, index) => {
    const newDaily = {
      time,
      weather_code: daily["weather_code"][index],
      temperature_2m_max: {
        unit: daily_units["temperature_2m_max"],
        value: daily["temperature_2m_max"][index],
      },
      temperature_2m_min: {
        unit: daily_units["temperature_2m_min"],
        value: daily["temperature_2m_min"][index],
      },
    };
    return newDaily;
  });

  const formattedData: FormattedData = {
    location,
    current: formattedCurrent,
    forecasts: formattedDaily,
  };

  return formattedData;
}
