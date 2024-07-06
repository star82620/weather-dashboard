import {
  ApiParams,
  ApiResponse,
  PayloadLocation,
} from "../constants/types/WeatherData";

const baseUrl = import.meta.env.VITE_API_URL_WEATHER;
const apiParams: ApiParams = {
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "is_day",
    "weather_code",
    "wind_speed_10m",
  ],
  daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
  forecast_days: 5,
};

export async function getWeatherApi(payloadLocation: PayloadLocation) {
  const { latitude, longitude } = payloadLocation;
  const { current, daily, forecast_days } = apiParams;

  const apiUrl = `${baseUrl}?latitude=${latitude}&longitude=${longitude}&current=${current.join()}&daily=${daily.join()}&forecast_days=${forecast_days}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(apiUrl, options);
    const json: ApiResponse = await res.json();

    if ("error" in json) {
      return json.reason;
    }

    return json;
  } catch (error) {
    console.error("error:", error);

    return [];
  }
}
