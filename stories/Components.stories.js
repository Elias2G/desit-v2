import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import {
  Title, Text, SubTitle,
  Line,
  Container,
  Row, Column,
  Button,
} from './ui';

export default {
  title: 'Components',
};

export const TextBlocks = () => (
  <>
  <Container>
    <SubTitle color="primary" toUppercase size="small">How thinks work</SubTitle>
    <Title variant="h2" size="medium">The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity</Title>
  </Container>
  <Container>
    <SubTitle align="center" color="primary" toUppercase size="small">How thinks work</SubTitle>
    <Title align="center" variant="h2" size="medium">The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity</Title>
  </Container>
  <Container>
    <SubTitle color="primary" toUppercase size="small">How thinks work</SubTitle>
    <Title variant="h3" size="large">Lorem Ipsum<br />dolor</Title>
    <Line margin="0" bgColor="primary" />
    <Container nom nop middleBig>
      <Text size="small">
        The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity
      </Text>
    </Container>
  </Container>
  <Container>
    <SubTitle align="center" color="primary" toUppercase size="small">How thinks work</SubTitle>
    <Title align="center" variant="h3" size="large">Lorem Ipsum<br />dolor</Title>
    <Line bgColor="primary" />
    <Container nop middleBig>
      <Text align="center" size="small">
        The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity
      </Text>
    </Container>
    <Row align="center" justify="center">
      <Button style={{'marginTop': '50px'}} align="center" variant="gradient" size="small" toUppercase>JEtzt durchstarten</Button>
    </Row>
  </Container>
  </>
)
