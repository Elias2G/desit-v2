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
    'color:' + setColors(props, color) + ';' +
    'background-color:' + setBgColors(props, color)
  );
};

// The border needs a FUNCTION
// i should go with smth that creates the string and is tied with the colors settings
const InputPrimary = styled.input`
  border: ${props => props.border ? props.border : border.default};
  border-color: ${props => props.borderColor ? color[props.borderColor] : null};
  ${props => groupDefaultStyles(props, 'input')};

  ::placeholder {
    color: ${props => setColors(props, color)};
    opacity: 0.5;
  }
`;

export const Input = (props) => (
  <InputPrimary {...props} />
);

const MyLabel = styled.label`

  ${props => groupDefaultStyles(props, 'input')};
`;

export const Label = (props) => (
  <MyLabel {...props} />
);
