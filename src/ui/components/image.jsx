import React from 'react';
import styled from 'styled-components';

import { color, setBgColors, setMargin, setPadding, border, setBorder } from './settings';

const MyImage = styled.img`
  width: 100%;
  height: auto;
  max-width: ${props => props.maxWidth || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  border: ${props => setBorder(props, border)};
  border-radius: ${props => props.r || '0'};
`;

export const Image = (props) => (
  <MyImage src={props.src} {...props}>{props.children}</MyImage>
);
