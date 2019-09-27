import React from 'react';
import styled from 'styled-components';

import { color, setBgColors, setMargin, setPadding, border, setBorder, setGradientBg, gradients, setColors } from './settings';

const FieldStyle = styled.div`
  display: block;
  height: 100%;
  max-height: 60px;
  width: 100%;
  min-width: 200px;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 50px;
  padding: 10px 12px;
  position: relative;
  cursor: pointer;

  ::after {
    content: '+';
    font-weight: bold;
    display: inline;
    position: absolute;
    padding: 5px 12px;
    right: 0;
  }
`;

export const Field = (props) => (
  <FieldStyle {...props}>{props.children}</FieldStyle>
);

const SelectStyle = styled.div`
  pointer-events: none;
  width: 100%;
  max-width: 200px;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 8px;
  position: absolute;
  right: 0;
  background-color: white;
`;

export const Selection = (props) => (
  <SelectStyle {...props}>{props.children}</SelectStyle>
);

const FormTagStyle = styled.div`
  display: inline-block;
  font-family: 'Roboto';
  font-size: calc(9pt + 0.25rem);
  background-color: orangered;
  border-radius: 25px;
  padding: 5px 12px;
  color: white;
  width: auto;
  margin-right: 5px;
`;

export const FormTag = (props) => (
  <FormTagStyle {...props}>{props.children}</FormTagStyle>
);

const IconStyle = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  background-image: url('https://via.placeholder.com/25');
`;

export const FormIcon = (props) => (
  <IconStyle {...props}>{props.children}</IconStyle>
);

const OptionStyle = styled.p`
  background: ${props => props.active ? '#ebebeb' : 'white'};
  font-family: 'Roboto';
  font-size: calc(9pt + 0.25rem);
  padding: 10px;
  pointer-events: auto;
`;

export const Option = (props) => (
  <OptionStyle {...props}>{props.children}</OptionStyle>
);
