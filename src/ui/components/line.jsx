import React from 'react';
import styled from 'styled-components';

import { color, setBgColors } from './settings';

const Hr = styled.hr`
  height: 6px;
  max-width: 150px;
  border: 0;
  background-color: ${props => setBgColors(props, color)};
  margin: ${props => props.margin || 'auto' };

  margin-top: 50px;
  margin-bottom: 15px;
`;

export const Line = (props) => (
  <Hr {...props} />
);
