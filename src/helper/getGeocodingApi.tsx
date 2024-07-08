import {
  ApiResponse,
  PayloadName,
  ResponseData,
} from "../constants/types/GeocodingData";

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

  const apiUrl = `${baseUrl}?count=${count}&name=${name}`;

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
      console.log(json.reason);
      return null;
    }
    return json;
    // return null;
  } catch (error) {
    console.error("error:", error);

    return null;
  }
}
