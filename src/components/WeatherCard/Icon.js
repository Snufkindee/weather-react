import React from 'react';
import styled from '@emotion/styled';

const Icon = ({ icon }) => {
  const Icon = styled.img`
    width: 40%;
  `;

  let iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

  return <Icon src={iconUrl} alt='Weather Icon' />;
};

export default Icon;
