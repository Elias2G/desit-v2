import React from 'react';
import styled from 'styled-components';

import { breakPoints, color } from './settings';


const FlexRow = styled.section`
  width: 100%;
  display: flex;
  flex-flow: ${props => props.noWrap ? "nowrap" : "row wrap"};
  align-items: ${
    props =>
    props.flexAlignCenter ? "center" :
    props.flexAlignStart ? "flex-start" :
    props.flexAlignEnd ? "flex-end" :
    props.flexAlignStretch ? "stretch" :
    props.flexAlignSpaceBetween ? "space-between" :
    props.flexAlignSpaceAround ? "space-around" :
    "auto"
  };
  align-content: ${
    props =>
    props.flexAlignCenter ? "center" :
    props.flexAlignStart ? "flex-start" :
    props.flexAlignEnd ? "flex-end" :
    props.flexAlignStretch ? "stretch" :
    props.flexAlignSpaceBetween ? "space-between" :
    props.flexAlignSpaceAround ? "space-around" :
    "auto"
  };
  justify-content: ${
    props =>
    props.justifyCenter ? "center" :
    props.justifyStart ? "flex-start" :
    props.justifyEnd ? "flex-end" :
    props.justifySpaceEvenly ? "space-evenly" :
    props.justifySpaceBetween ? "space-between" :
    props.justifySpaceAround ? "space-around" :
    "auto"
  };
  background-color: ${props => props.bgPrimary ? color.primary : props.bgSecondary ? color.secondary : props.bgTertiary ? color.tertiary : "none" };
`;

export const Row = (props) => (
  <FlexRow {...props}>{props.children}</FlexRow>
);


// GENERATE COLUMS

// const breakPoints = {
//   s: '(min-width: 0px)',
//   ms: '(min-width: 576px)',
//   md: '(min-width: 768px)',
//   ml: '(min-width: 992px)',
//   lg: '(min-width: 1200px)',
//   xl: '(min-width: 1600px)'
// }

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0.9rem;
  width: 100%;
  max-width: 100%;
  background-color: ${props => props.bgPrimary ? color.primary : props.bgSecondary ? color.secondary : props.bgTertiary ? color.tertiary : "none" };

  @media ${breakPoints.s} {
    max-width: ${props => `calc(0.08333333% * ${props.s * 100})` };
  }
  @media ${breakPoints.ms} {
    max-width: ${props => `calc(0.08333333% * ${props.ms * 100})` };
  }
`;

export const Column = (props) => (
  <Col {...props}>{props.children}</Col>
);
