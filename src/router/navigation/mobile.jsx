import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image } from '../../ui';
import { Home, Blog, Portfolio } from '../../assets/media/icons';
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
      <HeadBar>
        
      </HeadBar>
      <div
        ref={this.nav}
        style={
        {
          transition: '200ms',
          bottom: '0',
          position: 'fixed',
          'zIndex': '999',
          backgroundColor: 'white',
          borderTop: '1px solid #ebebeb',
          width: '100%'
        }
      }>
        <Container full nop >
          <Row >
            <Column s={2} onClick={this.closeNav}>
              <NavLink exact to="/" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Home />
                    </div>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column s={2} onClick={this.closeNav}>
              <NavLink to="/blog" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Blog />
                    </div>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column s={2} onClick={this.closeNav}>
              <NavLink to="/portfolio" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Portfolio />
                    </div>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column s={2} onClick={this.closeNav}>
              <NavLink to="/portfolio" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Portfolio />
                    </div>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column s={4}>
              <Row justify="flex-end" align="center" style={{padding: '10px'}}>
                <div onClick={this.toggleOpenAndClose} style={this.state.isOpen ? {background: '#ebebeb'} : null}>
                  <div style={{margin: 'auto'}}>
                    <div style={{width: '20px', height: '20px'}}>
                      <Portfolio />
                    </div>
                  </div>
                </div>
              </Row>
            </Column>
          </Row>
        </Container>
      </div>

      <MobileModal isOpen={this.state.isOpen}/>
    </>
    );
  }
}

export default MobileNav;
