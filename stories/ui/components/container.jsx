import React from 'react';
import styled from 'styled-components';

import { color, setBgColors } from './settings';

const Section = styled.section`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  max-width: ${props => props.big ? "1600px" : props.middleBig ? "860px" : props.middle ? "680px" : props.middleSmall ? "500px" : props.small ? "320px" : "100%" };
  background-color: ${props => setBgColors(props, color) };
`;

export const Container = (props) => (
  <Section {...props}>{props.children}</Section>
);


const DoWhatYouWant = styled.div`
  width: ${props => props.width || 'auto'};
  background-color: ${props => setBgColors(props, color) };
`;

export const Box = (props) => (
  <DoWhatYouWant {...props}>{props.children}</DoWhatYouWant>
);
