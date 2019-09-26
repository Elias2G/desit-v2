import React, { Component } from 'react';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { HeaderHalf } from '../../assets/components/header';

import BlogList from './blogList';

class Blog extends Component {
  render() {
    return (
      <Container full nop>
        <HeaderHalf>
          <Row>
            <Column s={12}>
              <Title variant="h1" size="large" align="center">
                Neue Nachrichten, Wissenswertes <br /> und lustiges.
              </Title>
              <Text size="small" align="center" style={{'marginTop': '50px'}}>
                The expert Team at Brightscout specializes in building innovative technology solutions
              </Text>
            </Column>
          </Row>
        </HeaderHalf>

        <Container big>
          <Row>
            <BlogList />
          </Row>

        </Container>


      </Container>
    );
  }
}

export default Blog;
