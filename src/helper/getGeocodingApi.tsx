import {
  ApiResponse,
  PayloadName,
  ResponseData,
} from "../constants/types/GeocodingData";

const proxy = import.meta.env.API_PROXY_URL;
const proxyKey = import.meta.env.API_PROXY_KEY;
const baseUrl = import.meta.env.VITE_API_URL_GEOCODING;
const apiParams = {
  name: "",
  count: 3,
};

export default async function getLocationData(
  payloadName: PayloadName
): Promise<ResponseData | null> {
  apiParams.name = payloadName;

  const { name, count } = apiParams;

  const apiUrl = `${proxy}${baseUrl}?count=${count}&name=${name}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-cors-api-key": proxyKey,
    },
  };

  try {
    const res = await fetch(apiUrl, options);
    const json: ApiResponse = await res.json();
    if ("error" in json) {
      console.log(json.reason);
      return null;
    }
    return json;
  } catch (error) {
    console.error("error:", error);

    return null;
  }
}
