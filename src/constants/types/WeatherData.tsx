export type TemperatureUnit = "°C" | "°F";
export type LocationType = { latitude: number; longitude: number };

// API 參數
export type PayloadLocation = LocationType;

export type ApiParams = {
  current: Array<
    | "temperature_2m"
    | "relative_humidity_2m"
    | "is_day"
    | "weather_code"
    | "wind_speed_10m"
  >;
  daily: Array<"weather_code" | "temperature_2m_max" | "temperature_2m_min">;
  forecast_days: number;
};

// API 回應
type ResponseData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: "GMT" | string;
  timezone_abbreviation: "GMT" | string;
  elevation: number | string;
  current_units: {
    time: "iso8601";
    interval: "seconds" | string;
    temperature_2m: TemperatureUnit;
    relative_humidity_2m: "%";
    wind_speed_10m: "km/h" | "mph" | "m/s" | "knots";
    is_day: "";
    weather_code: "wmo code";
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    is_day: 0 | 1;
    weather_code: number;
  };
  daily_units: {
    time: "iso8601";
    weather_code: "wmo code";
    temperature_2m_max: TemperatureUnit;
    temperature_2m_min: TemperatureUnit;
  };
  daily: {
    time: Array<string>;
    weather_code: Array<number>;
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
  };
};

type ResponseError = {
  reason: string;
  error: boolean;
};

export type ApiResponse = ResponseData | ResponseError;

// 整理過的 Daily forecasts
type DailyForecasts = {
  time: string;
  weather_code: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
};

export type WeatherDataset = {
  location: LocationType;
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
    is_day: 0 | 1;
  };
  forecasts: DailyForecasts[];
};
