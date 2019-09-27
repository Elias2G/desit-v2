import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image } from '../../ui';


class DesktopNav extends Component {
  render() {
    return (
      <div style={{position: 'fixed', backgroundColor: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.2)', top: '0', left: '0', zIndex: '999', width: '100%'}}>
        <Container full nop>
          <Row>
            <Column nop s={2}>
              logo
            </Column>
            <Column nop s={8}>
              <Row justify="center">
                <div style={{padding: '0 15px'}}>
                  <NavLink activeStyle={{color: '#20D1D1'}} exact to="/"><Text size="small">Home</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeStyle={{color: '#20D1D1'}} exact to="/blog"><Text size="small">Blog</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeStyle={{color: '#20D1D1'}} exact to="/portfolio"><Text size="small">Portfolio</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeStyle={{color: '#20D1D1'}} exact to="/leistungen"><Text size="small">Leistungen</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeStyle={{color: '#20D1D1'}} exact to="/ueber-uns"><Text size="small">Über uns</Text></NavLink>
                </div>
              </Row>
            </Column>
            <Column nop s={2}>
              logo
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DesktopNav;
