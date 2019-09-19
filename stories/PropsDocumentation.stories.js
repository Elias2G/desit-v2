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
  <Container big>
    <Title variant="h1" size="medium">Element Type: TITLE</Title>
    <Row>
      <Column s={2}>
        <Text size="big">prop name</Text>
      </Column>
      <Column s={5}>
        <Text size="big">value</Text>
      </Column>
      <Column s={2}>
        <Text size="big">type</Text>
      </Column>
      <Column s={3}>
        <Text size="big">description</Text>
      </Column>

      <Column s={2}>
        <Text size="small">variant</Text>
      </Column>
      <Column s={5}>
        <Text size="small">h1, h2, h3, h4, h5, h6</Text>
      </Column>
      <Column s={2}>
        <Text size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text size="small">DOM Element</Text>
      </Column>

      <Column s={2}>
        <Text size="small">size</Text>
      </Column>
      <Column s={5}>
        <Text size="small">large, medium, small</Text>
      </Column>
      <Column s={2}>
        <Text size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text size="small">font size</Text>
      </Column>

      <Column s={2}>
        <Text size="small">color</Text>
      </Column>
      <Column s={5}>
        <Text size="small">primary, secondary, tertiary, accent, fontColorSecondary</Text>
      </Column>
      <Column s={2}>
        <Text size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text size="small">color</Text>
      </Column>

      <Column s={2}>
        <Text size="small">align</Text>
      </Column>
      <Column s={5}>
        <Text size="small">center, left, right</Text>
      </Column>
      <Column s={2}>
        <Text size="small">string</Text>
      </Column>
      <Column s={3}>
        <Text size="small">text align</Text>
      </Column>
    </Row>
  </Container>
)
