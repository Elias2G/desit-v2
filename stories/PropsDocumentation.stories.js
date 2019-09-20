import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import {
  Title, Text, SubTitle,
  Line,
  Container,
  Row, Column
} from './ui';

export default {
  title: 'props',
};

export const titles = () => (
  <Container large>
    <Title variant="h1" size="medium">Element Type: TITLE</Title>
    <Row>
      <Column s={2}>
        <Text size="large">prop name</Text>
      </Column>
      <Column s={5}>
        <Text size="large">value</Text>
      </Column>
      <Column s={2}>
        <Text size="large">type</Text>
      </Column>
      <Column s={3}>
        <Text size="large">description</Text>
      </Column>

      <Column s={2}>
        <Text nop size="small">variant</Text>
      </Column>
      <Column s={5}>
        <Text nop size="small">h1, h2, h3, h4, h5, h6</Text>
      </Column>
      <Column s={2}>
        <Text nop size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text nop size="small">DOM Element</Text>
      </Column>

      <Column s={2}>
        <Text nop size="small">size</Text>
      </Column>
      <Column s={5}>
        <Text nop size="small">large, medium, small</Text>
      </Column>
      <Column s={2}>
        <Text nop size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text nop size="small">font size</Text>
      </Column>

      <Column s={2}>
        <Text nop size="small">color</Text>
      </Column>
      <Column s={5}>
        <Text nop size="small">primary, secondary, tertiary, accent, fontColorSecondary</Text>
      </Column>
      <Column s={2}>
        <Text nop size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text nop size="small">color</Text>
      </Column>

      <Column s={2}>
        <Text nop size="small">align</Text>
      </Column>
      <Column s={5}>
        <Text nop size="small">center, left, right</Text>
      </Column>
      <Column s={2}>
        <Text nop size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text nop size="small">text align</Text>
      </Column>
    </Row>
  </Container>
)
