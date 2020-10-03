import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/component';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';

const WeatherContainer = ({ location }) => {
  const initialState = {
    city: '',
    country: '',
    temp: '',
    condition: '',
    icon: '',
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(initialState);

  const getWeather = (q) => {
    setLoading(true);
    let apiPrefix = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=253cde5bb1978a9b7cb87ab6fffec1f0&APPID=`;
    axios
      .get(apiPrefix + process.env.REACT_APP_WEATHER_API_KEY)
      .then((e) => {
        setWeather({
          city: e.data.name,
          country: e.data.sys.country,
          temp: e.data.main.temp,
          condition: e.data.weather[0].main,
          icon: e.data.weather[0].icon,
        });
      })
      .catch((e) => {
        setError(true);
      });
    setLoading(false);
  };

  useEffect(() => getWeather(location), [location]);

  if (error) {
    return (
      <div style={{ color: 'black' }}>
        There has been an error!<br></br>
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          width: '200px',
          height: '240px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FadeLoader size={15} color={'lightblue'} />
      </div>
    );
  }

  return <WeatherCard {...weather} getWeather={getWeather} />;
};
export default WeatherContainer;
