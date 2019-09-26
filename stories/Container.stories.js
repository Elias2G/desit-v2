import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import { Button } from './ui';

import {
  Title, Text, SubTitle,
  Line,
  Container, Box,
  Row, Column,
  Image
} from './ui';

export default {
  title: 'container',
};

export const standart = () => (
  <Container big >
    <Container border >

    </Container>
  </Container>
)

export const BgImage = () => (
  <Container full nop>
    <Box
      width="100vw"
      height="100vh"
      maxHeight="100vh"
      bgPosition="center"
      bgSize="cover"
      image="url(https://via.placeholder.com/800)"
    >
      <Row justify="center" align="center" style={{height: '100vh'}}>
        <Column s={12}>
          <Container big>
            <Title variant="h1" size="large" color="fontSecondary">This was indeed sublime</Title>
            <Line bgColor="fontSecondary" margin="0"/>
            <Text size="small" color="fontSecondary">lorem ipsum dolor sit amet</Text>
            <Button
              style={{'margin-top': '50px'}}
              variant="gradient"
              withGradient="primary"
              size="small"
              toUppercase
            >
              jetzt durchstarten
            </Button>
          </Container>
        </Column>
      </Row>
    </Box>
  </Container>
)

export const BackgroundGradient = () => (
  <Container full nop>
    <Box
      width="100vw"
      height="100vh"
      maxHeight="100vh"
      withGradient="tertiary"
    >
      <Row justify="center" align="center" style={{height: '100vh'}}>
        <Column s={12}>
          <Container big>
            <Title variant="h1" size="large" color="fontSecondary">This was indeed sublime</Title>
            <Line bgColor="fontSecondary" margin="0"/>
            <Text size="small" color="fontSecondary">lorem ipsum dolor sit amet</Text>
            <Button
              style={{'margin-top': '50px'}}
              variant="gradient"
              withGradient="secondary"
              size="small"
              toUppercase
              shadow="large"
            >
              jetzt durchstarten
            </Button>
          </Container>
        </Column>
      </Row>
    </Box>
  </Container>
)
