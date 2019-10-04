import React from 'react';

import { Box, Container, Title, Line, Text, SubTitle, Row, Column, Image, Button } from '../../../ui';

import styled from 'styled-components';

export const HeadBar = (props) => {
  return(
    <FixedContainer>
      <Row align="center" style={{height: '100%', padding: '10px 15px'}}>
        <Column style={{padding: '0'}} s={12}>
          <Text style={{padding: '0'}} size="large">designintime</Text>
        </Column>
        {props.children}
      </Row>
    </FixedContainer>
  )
};


const FixedContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
`;
