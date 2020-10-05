import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';
import { motion } from 'framer-motion';

const WeatherCard = ({ temp, condition, city, country, icon, getWeather }) => {
  let bg = null;

  if (temp > minColdTemp) {
    bg = `linear-gradient(to bottom, #fdc830, #f37335)`;
  } else {
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

export default WeatherCard;
