import React from 'react';
import 'normalize.css';
import './ui/index.min.css';

import {
  Title, Text, SubTitle,
  Line,
  Container,
  Row, Column,
  Accordion, Panel
} from './ui';

export default {
  title: 'Accordion',
};

export const standart = () => (
  <Container big >
    <Container border>
      <Accordion>
        <Panel border label={<Text nop size="medium">Panel 1</Text>}>
          <Text size="small">test</Text>
        </Panel>
        <Panel border label={<Text nop size="medium">Panel 2</Text>}>
          <Text size="small">test</Text>
        </Panel>
      </Accordion>
    </Container>
  </Container>
)
