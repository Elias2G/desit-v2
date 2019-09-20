import React from 'react';
import styled from 'styled-components';

import {
  color, padding, margin, font, input, border,
  setMargin, setPadding, setColors, setFontSize, setFontWeight, setFontFamily, setBgColors
} from './settings';

const groupDefaultStyles = (props, type) => {
  return (
    'font-family:' + setFontFamily(props, font.family[type]) + ';' +
    'font-weight:' + setFontWeight(props, font.weight[type]) + ';' +
    'font-size:' + setFontSize(props, font.size[type]) + ';' +
    'padding:' + setPadding(props, padding[type]) + ';' +
    'margin:' + setMargin(props, margin[type]) + ';' +
    'color:' + setColors(props, color)
  );
};

const InputPrimary = styled.input`
  border: ${props => props.border ? props.border : border.default}
  ${props => groupDefaultStyles(props, 'input')};
  background-color: ${props => setBgColors(props, color)}
`;

export const Input = (props) => (
  <InputPrimary {...props} />
);
