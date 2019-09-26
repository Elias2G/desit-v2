import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import { Input, Label } from './ui';

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
    <Container>
      <Input size="medium" placeholder="test" type="text" />
    </Container>
    <Container>
      <Input size="medium" placeholder="test" type="text" bgColor="tertiaryDark" color="fontSecondary" borderColor="tertiaryDark"/>
    </Container>
    <Container>
      <Label size="medium">et</Label>
      <Input size="medium" placeholder="test" type="text" bgColor="tertiaryDark" color="fontSecondary" borderColor="tertiaryDark"/>
    </Container>
  </Container>
)
