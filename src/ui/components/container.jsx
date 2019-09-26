import React from 'react';
import styled from 'styled-components';

import { color, setBgColors, setMargin, setPadding, border, setBorder, setGradientBg, gradients } from './settings';

const Section = styled.section`
  width: 100%;
  padding: 15px;
  margin: ${props => props.nom ? 0 : '0 auto'}
  padding: ${props => props.nop ? 0 : '15px'}
  max-width: ${props => props.full ? 'auto' : props.big ? "1600px" : props.middleBig ? "860px" : props.middle ? "680px" : props.middleSmall ? "500px" : props.small ? "320px" : "1200px" };
  background-color: ${props => setBgColors(props, color) };
  border: ${props => setBorder(props, border)};
`;

export const Container = (props) => (
  <Section {...props}>{props.children}</Section>
);


const DoWhatYouWant = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '100%'};
  max-height: ${props => props.maxHeight || '100%'};
  background-color: ${props => setBgColors(props, color)};
  background-image: ${props => props.image || props.gradient ? 'linear-gradient(135deg,' + setGradientBg(props, gradients) + ')' : ''};
  background-position: ${props => props.bgPosition || ''};
  background-size: ${props => props.bgSize || ''};
`;

export const Box = (props) => (
  <DoWhatYouWant {...props}>{props.children}</DoWhatYouWant>
);

const BgImage = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};

`;

export const BgImageContainer = (props) => (
  <BgImage {...props}>{props.children}</BgImage>
);
