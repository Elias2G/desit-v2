import React from 'react';

import { Box, Container, Title, Line, Text, Row, Column, SubTitle } from '../../../ui';

export const LittleTextBlock = (props) => (
  <>
  <div style={{background: '#ebebeb', width: '50px', height: '50px', borderRadius: '25px'}}>
    <Text weight="700" color="primaryDark" align="center">icon</Text>
  </div>
  <Text size="small" weight="700">{props.title}</Text>
  <Text size="small">
    {props.text}
  </Text>
  </>
);
