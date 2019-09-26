import React from 'react';

import styled from 'styled-components';

const MobileNavModal = styled.div`
  transition: 400ms;
  position: fixed;
  bottom: ${props => props.isOpen ? '0' : '-100vh'};
  background: #ebebeb;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 888;
`;

export const MobileModal = (props) => (
  <MobileNavModal isOpen={props.isOpen} {...props}>

  </MobileNavModal>
);
