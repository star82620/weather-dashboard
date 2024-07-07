export type Location = { latitude: number; longitude: number };

export type TemperatureUnit = "°C" | "°F";
export type WindSpeedUnit = "km/h" | "mph" | "m/s" | "knots";
type TimeFormat = unknown; // e.g. "iso8601"
type TimeZone = unknown; // e.g. "GMT"
type Interval = unknown; // e.g. "seconds"

// API 參數
export type PayloadLocation = Location;

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
export type CurrentUnits = {
  time: TimeFormat;
  interval: Interval;
  temperature_2m: TemperatureUnit;
  relative_humidity_2m: "%";
  wind_speed_10m: WindSpeedUnit;
  is_day: "";
  weather_code: "wmo code";
};

export type DailyUnits = {
  time: TimeFormat;
  weather_code: "wmo code";
  temperature_2m_max: TemperatureUnit;
  temperature_2m_min: TemperatureUnit;
};

export type Current = {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  is_day: 0 | 1;
  weather_code: number;
};

export type Daily = {
  time: Array<string>;
  weather_code: Array<number>;
  temperature_2m_max: Array<number>;
  temperature_2m_min: Array<number>;
};

export type ResponseData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: TimeZone;
  timezone_abbreviation: TimeZone;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  daily_units: DailyUnits;
  daily: Daily;
};

export type ResponseError = {
  reason: string;
  error: boolean;
};

export type ApiResponse = ResponseData | ResponseError;

// Formatted Data
export type FormattedDaily = {
  time: string;
  weather_code: number;
  temperature_2m_max: {
    unit: DailyUnits["temperature_2m_max"];
    value: number;
  };
  temperature_2m_min: {
    unit: DailyUnits["temperature_2m_min"];
    value: number;
  };
};

export type FormattedCurrent = {
  time: string;
  weather_code: number;
  is_day: Current["is_day"];
  temperature_2m: {
    unit: CurrentUnits["temperature_2m"];
    value: Current["temperature_2m"];
  };
  relative_humidity_2m: {
    unit: CurrentUnits["relative_humidity_2m"];
    value: Current["relative_humidity_2m"];
  };
  wind_speed_10m: {
    unit: CurrentUnits["wind_speed_10m"];
    value: Current["wind_speed_10m"];
  };
};

export type FormattedData = {
  location: Location;
  current: FormattedCurrent;
  forecasts: FormattedDaily[];
};
