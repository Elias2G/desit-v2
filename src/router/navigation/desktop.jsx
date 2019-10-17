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
              <Text weight="600" size="medium">designintime</Text>
            </Column>
            <Column nop s={8}>
              <Row justify="center">
                <div style={{padding: '0 15px'}}>
                  <NavLink activeClassName="mainNavLink" exact to="/"><Text className="mainNav" size="small">Home</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeClassName="mainNavLink" to="/blog"><Text className="mainNav" size="small">Blog</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeClassName="mainNavLink" to="/portfolio"><Text className="mainNav" size="small">Portfolio</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeClassName="mainNavLink" to="/leistungen"><Text className="mainNav" size="small">Leistungen</Text></NavLink>
                </div>
                <div style={{padding: '0 15px'}}>
                  <NavLink activeClassName="mainNavLink" exact to="/ueber-uns"><Text className="mainNav" size="small">Über uns</Text></NavLink>
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
