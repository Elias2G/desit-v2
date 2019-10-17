import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image } from '../../ui';

const MobileNavModal = styled.div`
  transition: 600ms;
  position: fixed;
  bottom: ${props => props.isOpen ? '0' : '-100vh'};
  background: white;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 888;
  .innerMobileModalContainer {
    transition: 600ms;
    padding-top: ${props => props.isOpen ? '75px' : '200px'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    transition-delay: 200ms;
  }
`;

export const MobileModal = (props) => (
  <MobileNavModal isOpen={props.isOpen} {...props}>
    <Container className="innerMobileModalContainer" full isOpen={props.isOpen}>
      <NavLink exact to="/" activeClassName="activeMobileNav" ><Text className="activeMobileNavText" onClick={props.closeNav} size="small" weight="600">Homepage</Text></NavLink>
      <NavLink to="/blog" activeClassName="activeMobileNav" ><Text className="activeMobileNavText" onClick={props.closeNav} size="small" weight="600">Blog</Text></NavLink>
      <NavLink to="/portfolio" activeClassName="activeMobileNav" ><Text className="activeMobileNavText" onClick={props.closeNav} size="small" weight="600">Portfolio</Text></NavLink>
      <NavLink to="/leistungen" activeClassName="activeMobileNav" ><Text className="activeMobileNavText" onClick={props.closeNav} size="small" weight="600">Leistungen</Text></NavLink>
      <NavLink to="/ueber-uns" activeClassName="activeMobileNav" ><Text className="activeMobileNavText" onClick={props.closeNav} size="small" weight="600">über uns</Text></NavLink>
      <NavLink to="/kontakt" activeClassName="activeMobileNav" ><Text className="activeMobileNavText" onClick={props.closeNav} size="small" weight="600">Kontakt</Text></NavLink>
    </Container>
  </MobileNavModal>
);
