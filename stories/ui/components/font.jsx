import React from 'react';
import styled from 'styled-components';

import {
  color, padding, margin, font,
  setMargin, setPadding, setColors, setFontSize, setFontWeight, setFontFamily
} from './settings';

const groupDefaultStyles = (props, type, extention) => {
  // This if does exist cuz of the different depth level of the font object
  // idk how to set extension and type in a single parameter
  if(extention !== undefined) {
    return (
      'font-family:' + setFontFamily(props, font.family[extention][type]) + ';' +
      'font-weight:' + setFontWeight(props, font.weight[extention][type]) + ';' +
      'font-size:' + setFontSize(props, font.size[extention][type]) + ';' +
      'padding:' + setPadding(props, padding[extention][type]) + ';' +
      'margin:' + setMargin(props, margin[extention][type]) + ';' +
      'color:' + setColors(props, color)
    );
  }
  return (
    'font-family:' + setFontFamily(props, font.family[type]) + ';' +
    'font-weight:' + setFontWeight(props, font.weight[type]) + ';' +
    'font-size:' + setFontSize(props, font.size[type]) + ';' +
    'padding:' + setPadding(props, padding[type]) + ';' +
    'margin:' + setMargin(props, margin[type]) + ';' +
    'color:' + setColors(props, color)
  );
};

const H1 = styled.h1`
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'h1', 'title')}
`;
const H2 = styled.h2`
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'h2', 'title')}
`;
const H3 = styled.h3`
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'h3', 'title')}
`;
const H4 = styled.h4`
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'h4', 'title')}
`;
const H5 = styled.h5`
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'h5', 'title')}
`;
const H6 = styled.h6`
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'h6', 'title')}
`;

export const Title = (props) => {
  switch(props.variant) {
    case 'h1':
    return (
      <H1 {...props} >{props.children}</H1>
    );
    case 'h2':
    return (
      <H2 {...props} >{props.children}</H2>
    );
    case 'h3':
    return (
      <H3 {...props} >{props.children}</H3>
    );
    case 'h4':
    return (
      <H4 {...props} >{props.children}</H4>
    );
    case 'h5':
    return (
      <H5 {...props} >{props.children}</H5>
    );
    case 'h6':
    return (
      <H6 {...props} >{props.children}</H6>
    );

    default:
    return null;
  }
}


const Pararaph = styled.p`
  line-height: 1.6;
  text-align: ${props => props.align || 'left'};
  ${props => groupDefaultStyles(props, 'paragraph')}
`;

export const Text = (props) => (
  <Pararaph {...props}>{props.children}</Pararaph>
);


const Subtitle = styled.p`
  text-align: ${props => props.align || 'left'};
  line-height: 1;
  text-transform: ${props =>
    props.toUppercase ? "uppercase" : "inherit"
  };
  ${props => groupDefaultStyles(props, 'subtitle')}
`;

export const SubTitle = (props) => (
  <Subtitle {...props}>{props.children}</Subtitle>
);
