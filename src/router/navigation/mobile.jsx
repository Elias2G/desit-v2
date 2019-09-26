import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image } from '../../ui';

import { MobileModal } from './mobileModal';


class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  state = {
    isScrolling: window.pageYOffset,
    scrollingDirection: 'up',
    isOpen: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttled(100, this.handleNavBar));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttled(100, this.handleNavBar));
  }

  throttled = (delay, fn) => {
    let lastCall = 0;
    return function(...args) {
      const now = (new Date).getTime();
      if(now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }

  handleNavBar = () => {
    const { isScrolling, scrollingDirection } = this.state;
    const navbar = this.nav.current;
    const windowOffset = window.pageYOffset;

    if(scrollingDirection === 'up' && windowOffset + 10 < isScrolling) {
      this.setState({
        isScrolling: windowOffset,
      })
    }
    if(scrollingDirection === 'up' && windowOffset > isScrolling) {
      navbar.style.bottom = '-' + navbar.scrollHeight + 'px';
      this.setState({
        isScrolling: windowOffset,
        scrollingDirection: 'down'
      })
    }
    if(scrollingDirection === 'down' && windowOffset - 10 > isScrolling) {
      this.setState({
        isScrolling: windowOffset,
      })
    }
    if(scrollingDirection === 'down' && windowOffset < isScrolling) {
      navbar.style.bottom = '0';
      this.setState({
        isScrolling: windowOffset,
        scrollingDirection: 'up'
      })
    }
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
          'zIndex': '999',
          backgroundColor: 'white',
          borderTop: '1px solid #ebebeb',
        }
      }>
        <Container full nop >
          <Row justify="space-between">
            <Column style={{borderRight: '1px solid #ebebeb', padding: '0'}} s={3} onClick={this.closeNav}>
              <NavLink exact to="/" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <Image style={{width: 'auto', margin: 'auto'}} src='https://via.placeholder.com/30' />
                  </div>
                  <div style={{width: '100%'}}>
                    <Text nop align="center" size="small">Home</Text>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column style={{borderRight: '1px solid #ebebeb', padding: '0'}} s={3} onClick={this.closeNav}>
              <NavLink to="/blog" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <Image style={{width: 'auto', margin: 'auto'}} src='https://via.placeholder.com/30' />
                  </div>
                  <div style={{width: '100%'}}>
                    <Text nop align="center" size="small">Blog</Text>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column style={{borderRight: '1px solid #ebebeb', padding: '0'}} s={3} onClick={this.closeNav}>
              <NavLink to="/portfolio" activeStyle={{background: '#fafafa'}}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <Image style={{width: 'auto', margin: 'auto'}} src='https://via.placeholder.com/30' />
                  </div>
                  <div style={{width: '100%'}}>
                    <Text nop align="center" size="small">Portfolio</Text>
                  </div>
                </Row>
              </NavLink>
            </Column>
            <Column style={{padding: '0', }} s={3}>
              <div onClick={this.toggleOpenAndClose} style={this.state.isOpen ? {background: '#ebebeb'} : null}>
                <Row align="center" justify="center" style={{padding: '10px'}}>
                  <div style={{margin: 'auto'}}>
                    <Image style={{width: 'auto', margin: 'auto'}} src='https://via.placeholder.com/30' />
                  </div>
                  <div style={{width: '100%'}}>
                    <Text nop align="center" size="small">Menü</Text>
                  </div>
                </Row>
              </div>
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
