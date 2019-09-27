import React from 'react';

import styled from 'styled-components';

import { Container, Row, Button, Column, Title, Text, Image, Tag } from '../../../ui';
import { FbShare } from '../../../assets/components/share';
import { BlogListCard } from '../../../assets/components/blog';

const ImageContainer = styled.div`
  overflow: hidden;
  height: 50vh;
  width: 100%;
  background-image: url(${props => props.image || ''});
  background-position: center;
  background-size: cover;
`;

export const Head = (props) => (
  <Container full nop>
    <ImageContainer image={props.image}>
      <div style={{position: 'absolute', width: '100%', bottom: 'calc(50vh - 7%)'}}>
        <Container big>
          <Row>
            <FbShare />
            <FbShare />
            <FbShare />
          </Row>
        </Container>
      </div>
    </ImageContainer>
  </Container>
);
