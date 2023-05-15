import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import type { WeatherType } from '../types/weatherTypes';
import options from '../UI/axiosOptions';

export default function MainPages(): JSX.Element {
  const [weather, setWeather] = useState<WeatherType>();
  const [city, setCity] = useState<string>('');

  const getWeather = (cityName: string): void => {
    const optionsWithParams = { ...options, params: { q: cityName } };
    axios<WeatherType>(optionsWithParams)
      .then((res) => {
        setWeather(res.data);
      })
      .catch(console.log);
  };

  const getWeatherDebounced = useCallback(debounce(getWeather, 800), []);

  useEffect(() => {
    if (city) {
      getWeatherDebounced(city);
    }
  }, [city]);

  const cityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };

  return (
    <div>
      <div className="title">Погода сейчас</div>
      <div className="div">
        <input className="input" placeholder="Введите город" type="text" value={city} onChange={cityChangeHandler} />
      </div>
      <div className="div2">
        <div>
          Город: {weather?.location?.name}, {weather?.location?.country}
        </div>
        <div> Время: {weather?.location?.localtime}</div>
      </div>
      <div className="weather">
        <div className="weatherBlock">
          <img className="blockImg" src={weather?.current?.condition.icon} alt="картинка" />
        </div>
        <div className="weatherBlock">
          <div className="blockInfo">
            <div className="Info">Обновлено: {weather?.current?.last_updated}</div>
            <div className="Info">Температура: {weather?.current?.temp_c}°</div>
            <div className="Info">Ощущается как: {weather?.current?.feelslike_c}°</div>
            <div className="Info">Порывы ветра: {weather?.current?.gust_kph} Км/ч</div>
            <div className="Info">Направление ветра: {weather?.current?.wind_dir}</div>
          </div>
        </div>
        <div className="weatherBlock">
          <div className="blockInfo">
            <div className="Info">К-во осадков: {weather?.current?.precip_in} Дюйма</div>
            <div className="Info">Давление воздуха: {weather?.current?.gust_kph} Д/рс</div>
            <div className="Info">Ультрафиолетовый индекс: {weather?.current?.uv} </div>
            <div className="Info">Видимость: {weather?.current?.vis_km} Км</div>
            <div className="Info">Cкорость ветра: {weather?.current?.wind_kph} Км/ч</div>
          </div>
        </div>
      </div>
    </div>
  );
}
