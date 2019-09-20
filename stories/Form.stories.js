import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import { Input } from './ui';

import {
  Title, Text, SubTitle,
  Line,
  Container,
  Row, Column
} from './ui';

export default {
  title: 'Forms',
};

export const input = () => (
  <Container big >
    <Input size="medium" placeholder="test" type="text" bgColor="primaryDark" />
  </Container>
)
