import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';
import { motion } from 'framer-motion';

const WeatherCard = ({ temp, condition, city, country, icon, getWeather }) => {
  const minHotTemp = 15;
  const maxHotTemp = 40;
  const minColdTemp = 20;
  const maxColdTemp = -20;

  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if (temp > minColdTemp) {
    highColor = (1 - calculateRatio(temp, minHotTemp, maxHotTemp)) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(to bottom, #fdc830, #f37335)`;
  } else {
    highColor = (1 - calculateRatio(temp, minColdTemp, maxColdTemp)) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(to top, #1a2980, #26d0ce);`;
  }

  const Card = styled.div`
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    border-radius: 15px;
    margin-left: 24px;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon icon={icon} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

const calculateRatio = (value, min, max) => {
  return (value - min) / (max - min);
};

export default WeatherCard;
