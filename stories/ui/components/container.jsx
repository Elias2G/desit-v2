import React from 'react';
import styled from 'styled-components';

import { color } from './settings';

const Section = styled.section`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  max-width: ${props => props.big ? "1600px" : props.middleBig ? "860px" : props.middle ? "680px" : props.middleSmall ? "500px" : props.small ? "320px" : "100%" };
  background-color: ${props => props.bgPrimary ? color.primary : props.bgSecondary ? color.secondary : props.bgTertiary ? color.tertiary : "none" };
`;

export const Container = (props) => (
  <Section {...props}>{props.children}</Section>
);
