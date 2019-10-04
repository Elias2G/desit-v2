import React from 'react';

import { Box, Container, Title, Line, Text, SubTitle, Row, Column, Image, Button } from '../../../ui';

export const CallToAction = (props) => {
  return(
    <Container big style={{'marginTop': '50px', border: '2px solid lightgrey', borderRadius: '16px'}}>
      <Row>
        <Column md={9}>
          <Container>
            <Title variant="h6" size="medium">
              {props.children}
            </Title>
          </Container>
        </Column>
        <Column md={3}>
          <Row align="center" justify="center" style={{height: '100%', width: '100%'}}>
            <Container>
              <Button shadow="large" variant="gradient" toUppercase size="small" >arbeite mit uns</Button>
            </Container>
          </Row>
        </Column>
      </Row>
    </Container>
  )
};
