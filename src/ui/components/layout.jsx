import React from 'react';
import styled from 'styled-components';

import { breakPoints, color, setBgColors, setAlignGrid, setJustifyGrid } from './settings';


const FlexRow = styled.section`
  width: 100%;
  display: flex;
  flex-flow: ${props => props.noWrap ? "nowrap" : "row wrap"};
  align-items: ${props => setAlignGrid(props)};
  align-content: ${props => setAlignGrid(props)};
  justify-content: ${props => setJustifyGrid(props)};
  background-color: ${props => setBgColors(props, color) };
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
  padding: 0.5rem;
  width: 100%;
  max-width: 100%;
  background-color: ${props => setBgColors(props, color) };

  @media ${breakPoints.s} {
    max-width: ${props => `calc(0.08333333% * ${props.s * 100})` };
  }
  @media ${breakPoints.ms} {
    max-width: ${props => `calc(0.08333333% * ${props.ms * 100})` };
  }
  @media ${breakPoints.md} {
    max-width: ${props => `calc(0.08333333% * ${props.md * 100})` };
  }
  @media ${breakPoints.ml} {
    max-width: ${props => `calc(0.08333333% * ${props.ml * 100})` };
  }
  @media ${breakPoints.lg} {
    max-width: ${props => `calc(0.08333333% * ${props.lg * 100})` };
  }
  @media ${breakPoints.xl} {
    max-width: ${props => `calc(0.08333333% * ${props.xl * 100})` };
  }
`;

export const Column = (props) => (
  <Col {...props}>{props.children}</Col>
);
