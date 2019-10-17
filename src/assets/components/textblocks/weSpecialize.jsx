import React from 'react';
import styled from "styled-components";

import { Box, Container, Title, Line, Text, Row, Column, SubTitle, Image } from '../../../ui';

const WeSpContainer = styled.div`
  box-sizing: border-box;
  max-width: 20%;
  height: auto;
  padding: 15px;
  overflow: hidden;
  border-radius: 8px;
`;

const WeSpImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const WeSpecialize = (props) => (
  <Container big style={{'marginTop': '50px'}}>
    <Row>
      <Column s={12}>
        <SubTitle align={props.align} color="primary" toUppercase size="small">{props.subtitle}</SubTitle>
        <Title align={props.align} variant="h2" size="medium">
          {props.text}
        </Title>
        <Container nop>
          <Line bgColor="primary" align="center" />
        </Container>
        <Text size="small" align="center">
          {props.children}
        </Text>
      </Column>

      <WeSpContainer>
        <WeSpImage src="https://via.placeholder.com/250" />
      </WeSpContainer>
      <WeSpContainer>
        <WeSpImage src="https://via.placeholder.com/250" />
      </WeSpContainer>
      <WeSpContainer>
        <WeSpImage src="https://via.placeholder.com/250" />
      </WeSpContainer>
      <WeSpContainer>
        <WeSpImage src="https://via.placeholder.com/250" />
      </WeSpContainer>
      <WeSpContainer>
        <WeSpImage src="https://via.placeholder.com/250" />
      </WeSpContainer>

      <Container middle nop>
        <Text size="small" align="center">
          designintime provides tzeams across diverse industries with the tools and insights they need to innovate.
          Use technology and design to capture fvalue for your customers, drice growth and solve meanigngul problems.
        </Text>
      </Container>

    </Row>
  </Container>
);
