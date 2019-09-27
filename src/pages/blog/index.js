import React, { Component } from 'react';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image, Divider, SubTitle } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { HeaderHalf } from '../../assets/components/header';

import BlogList from './blogList';
import BlogLatest from './blogLatest';
import BlogTop from './blogTop';

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

        {/* Top Beitrag Bereich */}
        <Container big>
          <Row>
            <BlogTop />
          </Row>
          <Divider />
        </Container>

        <Container big>
          <Row>
            <Column s={12}>
              <SubTitle color="primary" size="small" >NEU</SubTitle>
              <Title variant="h4" size="medium">Unsere letzten Beiträge</Title>
            </Column>
          </Row>
          <Row>
            <BlogLatest />
          </Row>
          <Divider />
        </Container>

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
