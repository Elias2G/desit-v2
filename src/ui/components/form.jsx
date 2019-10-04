import React from 'react';
import styled from 'styled-components';

import { color, setBgColors, setMargin, setPadding, border, setBorder, setGradientBg, gradients, setColors } from './settings';

const FieldStyle = styled.select`
  border-radius: 8px;
  padding: 8px 8px 8px 8px;
  border: 1px solid #c8c8c8;
  font-size: calc(10pt + 0.10rem);
  font-family: 'Roboto';
  transition: 200ms;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: #ebebeb;
    transition: 200ms;
  }
  :focus {
    background-color: #fafafa;
    outline: 0;
    transition: 200ms;
  }
`;

export const SelectField = (props) => (
  <FieldStyle {...props}>
    {props.children}
  </FieldStyle>
);

const OptionStyle = styled.option`
  width: inherit;
  padding-top: 20px;
  border-radius: 8px;
`;

export const Option = (props) => (
  <OptionStyle {...props}>
    {props.children}
  </OptionStyle>
);
