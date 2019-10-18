import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image } from '../../ui';
import { Home, Blog, Portfolio, Contact } from '../../assets/media/icons';
import { HeadBar } from '../../assets/components/mobileHeadBar';

import { MobileModal } from './mobileModal';


class MobileNav extends Component {
  state = {
    isOpen: false
  }

  toggleOpenAndClose = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  closeNav = () => {
    if(this.state.isOpen) {
      this.setState({isOpen: false})
    }
  }

  render() {
    return (
      <>
      <div
        ref={this.nav}
        style={
        {
          transition: '200ms',
          bottom: '0',
          position: 'fixed',
          'zIndex': '997',
          backgroundColor: 'white',
          borderTop: '1px solid #ebebeb',
          width: '100%',
          paddingBottom: '5px'
        }
      }>
        <Container full nop >
          <Row align="space-between" justify="space-between">
            <div style={{maxWidth: "20%", width: "100%"}} s={2} onClick={this.closeNav}>
              <NavLink exact to="/" activeClassName="activeMobileNav">
                <Row align="center" justify="center" style={{padding: '10px 5px 0px 5px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Home />
                    </div>
                  </div>
                  <Text className="activeMobileNavText" style={{padding: '0', width: '100%'}} align="center" size="xsmall">Home</Text>
                </Row>
              </NavLink>
            </div>
            <div style={{maxWidth: "20%", width: "100%"}} s={2} onClick={this.closeNav}>
              <NavLink to="/blog" activeClassName="activeMobileNav">
                <Row align="center" justify="center" style={{padding: '10px 5px 0px 5px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Blog />
                    </div>
                  </div>
                  <Text className="activeMobileNavText" style={{padding: '0', width: '100%'}} align="center" size="xsmall">Blog</Text>
                </Row>
              </NavLink>
            </div>
            <div style={{maxWidth: "20%", width: "100%"}} s={2} onClick={this.closeNav}>
              <NavLink to="/portfolio" activeClassName="activeMobileNav">
                <Row align="center" justify="center" style={{padding: '10px 5px 0px 5px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Portfolio />
                    </div>
                  </div>
                  <Text className="activeMobileNavText" style={{padding: '0', width: '100%'}} align="center" size="xsmall">Portfolio</Text>
                </Row>
              </NavLink>
            </div>
            <div style={{maxWidth: "20%", width: "100%"}} s={2} onClick={this.closeNav}>
              <NavLink to="/kontakt" activeClassName="activeMobileNav">
                <Row align="center" justify="center" style={{padding: '10px 5px 0px 5px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Contact />
                    </div>
                  </div>
                  <Text className="activeMobileNavText" style={{padding: '0', width: '100%'}} align="center" size="xsmall">Kontakt</Text>
                </Row>
              </NavLink>
            </div>
            <div style={{maxWidth: "20%", width: "100%"}} s={4}>
              <Row justify="center" align="center" style={{padding: '10px 5px 0px 5px'}}>
                <div onClick={this.toggleOpenAndClose} style={this.state.isOpen ? {background: '#ebebeb'} : null}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Portfolio />
                    </div>
                  </div>
                </div>
                <Text className="activeMobileNavText" style={{padding: '0', width: '100%'}} align="center" size="xsmall">Menü</Text>
              </Row>
            </div>
          </Row>
        </Container>
      </div>

      <MobileModal isOpen={this.state.isOpen} closeNav={this.closeNav}/>
    </>
    );
  }
}

export default MobileNav;
