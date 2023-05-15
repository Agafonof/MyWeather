export type WeatherType = {
  location: {
    name: string;
    country: string;
    region: string;
    localtime: string;
  };
  current: {
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    humidity: number;
    last_updated: string;
    vis_km: number;
    wind_degree: number;
    precip_in: number;
    uv: number;
    temp_c: number;
    temp_f: number;
    wind_kph: number;
    wind_dir: string;
    condition: {
      text: string;
      icon: string;
    };
  };
};
