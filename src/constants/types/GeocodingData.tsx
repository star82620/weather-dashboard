export type PayloadName = string;

type FeatureCode = unknown; // e.g. "PPLC"
type TimeZone = unknown; // e.g. "Asia/Taipei"

export type LocationDataItem = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: FeatureCode;
  country_code: string;
  admin1_id?: number;
  admin2_id?: number;
  timezone: TimeZone;
  population?: number;
  country_id: number;
  country: string;
  admin1?: string;
  admin2?: string;
};

export type ResponseData = {
  results: LocationDataItem[];
  generationtime_ms: number;
};

export type ResponseError = {
  error: boolean;
  reason: string;
};

export type ApiResponse = ResponseData | ResponseError;

// formatted data
export type FormattedLocation = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  country: string;
};
