import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  color, padding, margin, font, input, border,
  setMargin, setPadding, setColors, setFontSize, setFontWeight, setFontFamily, setBgColors, setBorder
} from './settings';

import { Container, Title } from '../';

const groupDefaultStyles = (props, type) => {
  return (
    'font-family:' + setFontFamily(props, font.family[type]) + ';' +
    'font-weight:' + setFontWeight(props, font.weight[type]) + ';' +
    'font-size:' + setFontSize(props, font.size[type]) + ';' +
    'padding:' + setPadding(props, padding[type]) + ';' +
    'margin:' + setMargin(props, margin[type]) + ';' +
    'color:' + setColors(props, color) + ';' +
    'background-color:' + setBgColors(props, color)
  );
};

const AccordionContainer = styled.div`
  width: 100%;
  ${props => groupDefaultStyles(props, 'accordion')};
`

const PanelContainer = styled.div`
  cursor: pointer;
  border-radius: 8px;
  border: ${props => setBorder(props, border)};
  ${props => groupDefaultStyles(props, 'panel')};
  :hover {
    background-color: lightgrey;
  }
`;

const PanelCollapsible = styled.div`
  height: 100%;
  max-height: ${props => props.height || '0px'};
  overflow: hidden;
  transition: 200ms;
`;

export const Accordion = (props) => (
  <AccordionContainer {...props}>
    {props.children}
  </AccordionContainer>
);


export class Panel extends Component {
  constructor(props) {
    super(props);
    this.panel = React.createRef();
  }
  state = {
    open: false,
    height: '0px',
  }

  togglePanel = (e) => {
    const eHeight = this.panel.current.scrollHeight;
    if(this.state.open === true) {
      this.setState({height: '0px', open: false})
    }
    if(this.state.open === false) {
      this.setState({height: eHeight + 'px', open: true})
    }

  }

  render() {
    const { props } = this;
    return (
      <PanelContainer {...props}>
        <div onClick={this.togglePanel}>
          {props.label}
        </div>
        <PanelCollapsible ref={this.panel} height={this.state.height}>
          {props.children}
        </PanelCollapsible>
      </PanelContainer>
    );
  }
}
