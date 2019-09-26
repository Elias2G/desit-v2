import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image, Box, Title } from '../../ui';


class Footer extends Component {
  render() {
    return (
      <Container full nop >
        <Box height="100%" gradient>
          <Container big>
            <Row style={{height: '100%'}}>
              <Column s={12} md={8}>
                <Title weight="300" size="large" variant="h1" color="fontSecondary">
                  Erfahre wie designintime <br />
                  dein Business <br />
                  verändern kann
                </Title>
                <Text size="small" color="fontSecondary" style={{marginTop: '50px'}}>
                  lorem ipsum dolor sit amet
                </Text>
              </Column>
            </Row>

          </Container>
        </Box>
      </Container>
    );
  }
}

export default Footer;
