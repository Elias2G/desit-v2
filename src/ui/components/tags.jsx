import React from 'react';
import styled from 'styled-components';

import { color, setBgColors, setMargin, setPadding, border, setBorder, setGradientBg, gradients, setColors } from './settings';

const MyTags = styled.span`
  padding: ${props => props.nop ? 0 : '3px 8px 3px 8px'}
  background-color: ${props => setBgColors(props, color) };
  color: ${props => setColors(props, color) };
  border-radius: 25px;
  font-size: calc(8pt + 0.10rem);
  margin-right: 5px;
  opacity: 1;
  word-break: keep-all;
`;

const TagIcon = styled.span`
  padding: 5px 0px 5px 10px;
  display: inline-block;
  cursor: pointer;
`;

export const Icon = (props) => (
  <TagIcon {...props}>{props.children}</TagIcon>
);

export const Tag = (props) => (
  <MyTags {...props}>{props.children}</MyTags>
);
