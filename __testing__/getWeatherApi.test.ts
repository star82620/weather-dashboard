import fetchMock from "fetch-mock";
import { getWeatherApi } from "../src/helper/getWeatherApi";
import {
  ApiResponse,
  PayloadLocation,
  TemperatureUnitName,
  ResponseData,
  ResponseError,
} from "../src/constants/types/WeatherData";

describe("getWeatherApi", () => {
  const payloadLocation: PayloadLocation = {
    latitude: 25.033,
    longitude: 121.5654,
  };
  const temperatureUnit: TemperatureUnitName = "celsius";

  afterEach(() => {
    fetchMock.restore();
  });

  it("should return ResponseData when API returns data", async () => {
    const mockResponse: ResponseData = {
      latitude: 25.033,
      longitude: 121.5654,
      generationtime_ms: 1.23,
      utc_offset_seconds: 28800,
      timezone: "GMT",
      timezone_abbreviation: "GMT",
      elevation: 10,
      current_units: {
        time: "iso8601",
        interval: "seconds",
        temperature_2m: "°C",
        relative_humidity_2m: "%",
        wind_speed_10m: "km/h",
        is_day: "",
        weather_code: "wmo code",
      },
      current: {
        time: "2023-07-10T00:00:00Z",
        interval: 3600,
        temperature_2m: 30,
        relative_humidity_2m: 70,
        wind_speed_10m: 15,
        is_day: 1,
        weather_code: 800,
      },
      daily_units: {
        time: "iso8601",
        weather_code: "wmo code",
        temperature_2m_max: "°C",
        temperature_2m_min: "°C",
      },
      daily: {
        time: ["2023-07-10T00:00:00Z"],
        weather_code: [800],
        temperature_2m_max: [32],
        temperature_2m_min: [25],
      },
    };

    fetchMock.getOnce(
      `https://api.yourweatherapi.com?latitude=${payloadLocation.latitude}&longitude=${payloadLocation.longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5&temperature_unit=celsius`,
      {
        body: mockResponse,
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await getWeatherApi(payloadLocation, temperatureUnit);
    expect(result).toEqual(mockResponse);
  });

  it("should return null when API returns error", async () => {
    const mockErrorResponse: ResponseError = {
      reason: "Invalid request",
      error: true,
    };

    fetchMock.getOnce(
      `https://api.yourweatherapi.com?latitude=${payloadLocation.latitude}&longitude=${payloadLocation.longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5&temperature_unit=celsius`,
      {
        body: mockErrorResponse,
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await getWeatherApi(payloadLocation, temperatureUnit);
    expect(result).toBeNull();
  });

  it("should return null for invalid latitude or longitude", async () => {
    const invalidLocation = { latitude: NaN, longitude: NaN };
    const result = await getWeatherApi(invalidLocation, temperatureUnit);
    expect(result).toBeNull();
  });
});
