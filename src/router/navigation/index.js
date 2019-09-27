import React, { Component } from 'react';

import MobileNav from './mobile';
import DesktopNav from './desktop';

class Navigation extends Component {
  render() {
    if(window.innerWidth < 992) {
      return (
        <MobileNav />
      );
    } else {
      return (
        <DesktopNav />
      );
    }
  }
}

export default Navigation;
