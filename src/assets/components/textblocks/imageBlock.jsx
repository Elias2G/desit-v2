import React from 'react';

import { Box, Container, Title, Line, Text, SubTitle, Row, Column, Image } from '../../../ui';

export const ImageBlock = (props) => {
  if(props.right) {
    return(
      <Container nop big style={{'marginTop': '50px'}}>
        <Row align="center">
          <Column md={5} s={12}>
            <Container>
              <Image r="8px" src="https://via.placeholder.com/500" />
            </Container>
          </Column>
          <Column md={1} s={12}></Column>
          <Column md={6} s={12}>
            <Container>
              <SubTitle size="small" color="primary" toUppercase>{props.subtitle}</SubTitle>
              <Title variant="h2" size="large">{props.title}</Title>
              <Line bgColor={props.bgColor} margin={props.margin} />
              <Container nop middleBig>
                <Text size="small" align={props.alignment}>
                  {props.text}
                </Text>
                {props.children}
              </Container>
            </Container>
          </Column>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container nop big style={{'marginTop': '50px'}}>
        <Row align="center">
          <Column md={6} s={12}>
            <Container>
              <SubTitle size="small" color="primary" toUppercase>{props.subtitle}</SubTitle>
              <Title variant="h2" size="large">{props.title}</Title>
              <Line bgColor={props.bgColor} margin={props.margin} />
              <Container nop middleBig>
                <Text size="small" align={props.alignment}>
                  {props.text}
                </Text>
                {props.children}
              </Container>
            </Container>
          </Column>
          <Column md={1} s={12}></Column>
          <Column md={5} s={12}>
            <Container>
              <Image r="8px" src="https://via.placeholder.com/500" />
            </Container>
          </Column>
        </Row>
      </Container>
    )
  }
};
