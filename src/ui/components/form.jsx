import React from 'react';
import styled from 'styled-components';

import { color, setBgColors, setMargin, setPadding, border, setBorder, setGradientBg, gradients, setColors } from './settings';

const FieldStyle = styled.select`
  border-radius: 50px;
  padding: 8px 8px 8px 8px;
  border: 2px solid #ebebeb;
  font-size: calc(10pt + 0.10rem);
  font-family: 'Roboto';
  transition: 200ms;
  font-weight: 400;
  cursor: pointer;
  background: #ebebeb;

  :hover {
    background-color: white;
    transition: 200ms;
    border: 2px solid #31a4dd;
  }
  :focus {
    background-color: white;
    outline: 0;
    transition: 200ms;
    border: 2px solid #7037C9;
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

const SelectCardField = styled.div`
  width: inherit;
  padding-top: 20px;
  border-radius: 8px;
`;

export const SelectCard = (props) => (
  <SelectCardField {...props}>
    {props.children}
  </SelectCardField>
);
