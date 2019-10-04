import React from 'react';

import styled from 'styled-components';

import { Container, Row, Button, Column, Title, Text, Image, Tag } from '../../../ui';
import { FbShare } from '../../../assets/components/share';
import { BlogListCard } from '../../../assets/components/blog';
import { ArrowDown } from '../../../assets/media/icons';

const ImageContainer = styled.div`
  overflow: hidden;
  height: 50vh;
  width: 100%;
  background-image: url(${props => props.image || ''});
  background-color: lightgrey;
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


const GoBackNav = styled.div`
  display: block;
  background: white;
  width: 100%;
  padding: 5px;
`;

export const MoveBackNav = (passed) => {
  const goBack = (passed) => {
    passed.passed.goBack()
  }

  return (
    <GoBackNav full nop>
      <Row style={{height: '100%'}} onClick={() => goBack(passed)}>
        <div style={{ background: '#ebebeb', padding: '5px', borderRadius: '4px', padding: '10px'}}>
          <Row justify="center" align="center" style={{height: '100%'}}>
            <div style={{width: '15px', height: '15px', transform: 'rotate(90deg)'}}>
              <ArrowDown />
            </div>
          </Row>
        </div>
        <div>
          <Row align="center" style={{height: '100%'}}>
            <Text style={{padding: '0 0 0 10px'}} size="small" weight="600">zurück zur Übersicht</Text>
          </Row>
        </div>
      </Row>
    </GoBackNav>
  )
};
