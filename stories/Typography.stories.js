import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import {
  Title, Text, SubTitle,
  Line,
  Container
} from './ui';

export default {
  title: 'Typography',
};

export const titles = () => (
  <Container>
    <Container>
      <Title size="large" variant='h1'>The spectacle before us was indeed sublime</Title>
      <Title size="medium" variant='h1'>The spectacle before us was indeed sublime</Title>
      <Title size="small" variant='h1'>The spectacle before us was indeed sublime</Title>
    </Container>

    <Container>
      <Title size="large" variant='h2'>The spectacle before us was indeed sublime</Title>
      <Title size="medium" variant='h2'>The spectacle before us was indeed sublime</Title>
      <Title size="small" variant='h2'>The spectacle before us was indeed sublime</Title>
    </Container>

    <Container>
      <Title size="large" variant='h3'>The spectacle before us was indeed sublime</Title>
      <Title size="medium" variant='h3'>The spectacle before us was indeed sublime</Title>
      <Title size="small" variant='h3'>The spectacle before us was indeed sublime</Title>
    </Container>

    <Container>
      <Title size="large" variant='h4'>The spectacle before us was indeed sublime</Title>
      <Title size="medium" variant='h4'>The spectacle before us was indeed sublime</Title>
      <Title size="small" variant='h4'>The spectacle before us was indeed sublime</Title>
    </Container>

    <Container>
      <Title size="large" variant='h5'>The spectacle before us was indeed sublime</Title>
      <Title size="medium" variant='h5'>The spectacle before us was indeed sublime</Title>
      <Title size="small" variant='h5'>The spectacle before us was indeed sublime</Title>
    </Container>

    <Container>
      <Title size="large" variant='h6'>The spectacle before us was indeed sublime</Title>
      <Title size="medium" variant='h6'>The spectacle before us was indeed sublime</Title>
      <Title size="small" variant='h6'>The spectacle before us was indeed sublime</Title>
    </Container>
  </Container>
)


export const text = () => (
  <Container>
    <Text size="large">
      The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.
    </Text>
    <Text size="medium">
      The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.
    </Text>
    <Text size="small">
      The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.
    </Text>
  </Container>
);

export const textblocks = () => (
  <Container>
    <SubTitle color="primary" toUppercase>HOw TO APproaCH THE prOBLEM</SubTitle>
    <Title variant="h1" size="large">The spectalce befor us was</Title>
    <Line primary left/>
    <Text size="small">
      The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.
    </Text>
  </Container>
);

export const coloredText = () => (
  <Container>
    <Title size="medium" variant="h3" color="primary">
      This was indeed Sublime
    </Title>
    <Title size="medium" variant="h3" color="primaryDark">
      This was indeed Sublime
    </Title>
    <Title size="medium" variant="h3" color="secondary">
      This was indeed Sublime
    </Title>
    <Title size="medium" variant="h3" color="tertiaryLight">
      This was indeed Sublime
    </Title>
  </Container>
);
