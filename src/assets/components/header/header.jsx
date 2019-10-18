import React from 'react';

import { Box, Container, Title, Line, Text, Row, Column } from '../../../ui';

export const Header = (props) => (
  <Container full nop>
    <Box
      width="100vw"
      height="100%"
      gradient
      withGradient="primary"
      style={{'paddingTop': '12%', minHeight: '100vh', paddingBottom: '2%'}}
    >
      <Container big>
        {props.children}
      </Container>
    </Box>
  </Container>
);

export const HeaderHalf = (props) => (
  <Container full nop>
    <Box
      {...props}
      width="100vw"
      style={{'paddingTop': '12%', minHeight: '50vh', paddingBottom: '2%'}}
    >
      <Container big>
        {props.children}
      </Container>
    </Box>
  </Container>
);
