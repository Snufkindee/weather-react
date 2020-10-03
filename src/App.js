import React from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer';
import styled from '@emotion/styled';

function App() {
  document.body.style.backgroundImage =
    'linear-gradient(to left, #4b6cb7, #182848)';
  return (
    <div className='App'>
      <Title>Weather around the world</Title>
      <div className='container'>
        <WeatherContainer location='Helsinki, fi' />
        <WeatherContainer location='London, uk' />
        <WeatherContainer location='Washington, us' />
      </div>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 2.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;
