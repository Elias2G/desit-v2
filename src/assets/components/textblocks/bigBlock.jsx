import React from 'react';

import { Box, Container, Title, Line, Text, Row, Column } from '../../../ui';

export const BigTextBlock = (props) => (
  <Container  style={{'marginTop': '50px'}}>
    <Title align={props.alignment} variant="h2" size="large">{props.title}</Title>
    <div>
      <Line bgColor={props.bgColor} margin={props.margin} />
    </div>
    <Container nop middleBig>
      <Text size="small" align={props.alignment}>
        {props.text}
      </Text>
      {props.children}
    </Container>
  </Container>
);
