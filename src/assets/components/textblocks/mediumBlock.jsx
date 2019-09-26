import React from 'react';

import { Box, Container, Title, Line, Text, Row, Column, SubTitle } from '../../../ui';

export const MediumTextBlock = (props) => (
  <Container style={{'marginTop': '50px'}}>
    <Row>
      <Column s={12}>
        <SubTitle align={props.align} color="primary" toUppercase size="small">{props.subtitle}</SubTitle>
        <Title align={props.align} variant="h2" size="medium">
          {props.text}
        </Title>
      </Column>
    </Row>
  </Container>
);
