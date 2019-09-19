import React from 'react';
import styled from 'styled-components';

import {
  color, padding, margin, font,
  setMargin, setPadding, setColors, setFontSize, setFontWeight
} from './settings';


const H1 = styled.h1`
  font-family: ${props => props.fontFamily === "" ? props.fontFamily : font.family.title.h1 };

  font-weight: ${props => setFontWeight(props, font.weight.title.h1)};
  font-size: ${props => setFontSize(props, font.size.title.h1)};
  padding: ${props => setPadding(props, padding.title.h1)};
  margin: ${props => setMargin(props, margin.title.h1)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
`;
const H2 = styled.h2`
  font-family: ${props => props.fontFamily === "" ? props.fontFamily : font.family.title.h2 };

  font-weight: ${props => setFontWeight(props, font.weight.title.h2)};
  font-size: ${props => setFontSize(props, font.size.title.h2)};
  padding: ${props => setPadding(props, padding.title.h2)};
  margin: ${props => setMargin(props, margin.title.h2)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
`;
const H3 = styled.h3`
  font-family: ${props => props.fontFamily === "" ? props.fontFamily : font.family.title.h3 };

  font-weight: ${props => setFontWeight(props, font.weight.title.h3)};
  font-size: ${props => setFontSize(props, font.size.title.h3)};
  padding: ${props => setPadding(props, padding.title.h3)};
  margin: ${props => setMargin(props, margin.title.h3)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
`;
const H4 = styled.h4`
  font-family: ${props => props.fontFamily === "" ? props.fontFamily : font.family.title.h4 };

  font-weight: ${props => setFontWeight(props, font.weight.title.h4)};
  font-size: ${props => setFontSize(props, font.size.title.h4)};
  padding: ${props => setPadding(props, padding.title.h4)};
  margin: ${props => setMargin(props, margin.title.h4)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
`;
const H5 = styled.h5`
  font-family: ${props => props.fontFamily === "" ? props.fontFamily : font.family.title.h5 };

  font-weight: ${props => setFontWeight(props, font.weight.title.h5)};
  font-size: ${props => setFontSize(props, font.size.title.h5)};
  padding: ${props => setPadding(props, padding.title.h5)};
  margin: ${props => setMargin(props, margin.title.h5)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
`;
const H6 = styled.h6`
  font-family: ${props => props.fontFamily === "" ? props.fontFamily : font.family.title.h6 };

  font-weight: ${props => setFontWeight(props, font.weight.title.h6)};
  font-size: ${props => setFontSize(props, font.size.title.h6)};
  padding: ${props => setPadding(props, padding.title.h6)};
  margin: ${props => setMargin(props, margin.title.h6)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
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
  font-family: "Roboto";
  font-weight: 400;
  line-height: 1.6;

  font-size: ${props => setFontSize(props, font.size.paragraph)};
  padding: ${props => setPadding(props, padding.paragraph)};
  margin: ${props => setMargin(props, margin.paragraph)};
  color: ${props => setColors(props, color) };

  text-align: ${props => props.align || 'left'};
`;

export const Text = (props) => (
  <Pararaph {...props}>{props.children}</Pararaph>
);


const Subtitle = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  line-height: 1;
  text-transform: ${props =>
    props.toUppercase ? "uppercase" : "inherit"
  };

  font-size: ${props => setFontSize(props, font.size.subtitle)};
  color: ${props => setColors(props, color) };
  padding: ${props => setPadding(props, padding.subtitle)};
  margin: ${props => setMargin(props, margin.subtitle)};

  text-align: ${props => props.align || 'left'};
`;

export const SubTitle = (props) => (
  <Subtitle {...props}>{props.children}</Subtitle>
);
