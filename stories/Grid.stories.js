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
  title: 'Grid',
};

export const standart = () => (
  <Container big color="primary">
    <Row color="secondary">
      <Column color="tertiary" s={4} ms={6}>
        <Container>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={4}>
        <Container>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={4} ms={6}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={8}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={2} ms={3}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={5}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>
    </Row>
  </Container>
)


export const alignUndJustifyCenter = () => (
  <Container big color="primary">
    <Row color="secondary" justify="center" align="center">
      <Column color="tertiary" s={4} ms={6}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={4}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={4} ms={6}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={8}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={2} ms={3}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={5}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>
    </Row>
  </Container>
)

export const justifyCenter = () => (
  <Container big color="primary">
    <Row color="secondary" justify="center">
      <Column color="tertiary" s={4} ms={6}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={4}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={4} ms={6}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={8}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={2} ms={3}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>

      <Column color="tertiary" s={5}>
        <Container bgTertiary>
          <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
          <Text size="big" variant='h1'>The spectacle before us was indeed sublime</Text>
        </Container>
      </Column>
    </Row>
  </Container>
)
