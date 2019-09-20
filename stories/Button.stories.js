import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import { Button } from './ui';

import {
  Title, Text, SubTitle,
  Line,
  Container,
  Row, Column
} from './ui';

export default {
  title: 'Button',
};

export const standart = () => (
  <Container big >
    <Row>
      <Column s={3}>
        <Container>
          <Button variant="primary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="primaryReversed" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="secondary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="gradient" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
    </Row>
    <Row>
      <Column s={3}>
        <Container>
          <Button variant="primary" bgColor="secondary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="primaryReversed" bgColor="secondary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="secondary" bgColor="secondary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="gradient" withGradient="secondary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
    </Row>
    <Row>
      <Column s={3}>
        <Container>
          <Button variant="primary" bgColor="tertiary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="primaryReversed" bgColor="tertiary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="secondary" bgColor="tertiary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
      <Column s={3}>
        <Container>
          <Button variant="gradient" withGradient="tertiary" toUppercase size="small">jetzt durchstarten</Button>
        </Container>
      </Column>
    </Row>
  </Container>
)
