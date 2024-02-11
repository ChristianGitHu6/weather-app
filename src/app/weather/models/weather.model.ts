export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface WeatherModel {
  location: Location;
  current: CurrentWeather;
}

export interface LoadableState<T> {
  /** True if the data is loading. */
  loading: boolean;

  /** The data, if loaded successfully. */
  data?: T;

  /** The error message, if loaded unsuccessfully. */
  error?: string;

  /** Uncompleted data forms, if loaded unsuccessfully because of targeting. */
  dataForms?: string[];
}


export function defaultLoadableState(): LoadableState<any> {
  return {
    loading: false,
    data: undefined,
    error: undefined,
    dataForms: undefined
  };
}

