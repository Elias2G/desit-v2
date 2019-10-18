import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { breakPoints } from '../../../ui/components/settings';
import { Filter } from '../../media/icons';
import { Row, Button, Column, Container, Text } from '../../../ui';

const Bar = styled.div`
  position: fixed;
  left: 0;
  background-color: white;
  z-index: 998;
  width: 100vw;
  overflow: hidden;

  ${props => props.open
    ? "height: 100vh; top: 0; transition: 500ms; padding: 75px 5px 5px 5px;"
    : "height: 0vh; top: -50vh; transition: 1000ms; padding: 0px 5px; transition-delay: 300ms;"
  }

  .actionContainer {
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    background-color: white;
    justify-content: space-between;

    ${props => props.open
      ? "bottom: 0; opacity: 1; transition: 300ms; transition-delay: 500ms;"
      : "bottom: -20vh; opacity: 0; transition: 300ms;"
    }
  }

  @media ${breakPoints.md} {
    background-color: white;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    border-radius: 16px;
    position: relative;
    width: 100%;
    height: auto;
    z-index: 997;
    overflow: none;
    top: auto;

    .actionContainer {
      opacity: 0;
      position: relative;
      left: auto;
      bottom: auto;
      opacity: 1;
      box-shadow: none;

      section {
        justify-content: flex-start;
      }
    }

    div {
      margin-right: 10px;
    }
  }
`;

const FilterIcon = styled.p`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1002;
  width: 20px;
  height: 20px;

  @media ${breakPoints.md} {
    display: none;
  }
`;

const Message = styled.div`
  position: fixed;
  background-color: #77dd77;
  top: 100px;
  left: 30px;
  padding: 0px 15px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
`;

class FilterBarContainer extends Component {
  state = {
    open: false,
    filter: {}
  }

  componentDidMount() {
    console.log(this.props.filterBarData);
  }

  toggleFilterOpen = () => {
    if(window.innerWidth > 768) {
      return null
    } else {
      this.setState({
        open: !this.state.open,
      })
    }
  }

  handleNewFilterDataOnSubmit = () => {
    if(this.state.filter !== null) {
      this.toggleFilterOpen();
      this.props.filter(this.state.filter);
    }
  }

  handleNewValue = (e, type) => {
    const { value } = e.target;
    let newValue;

    value === "Alle" ? newValue = null : newValue = value;

    if(type in this.state.filter) {
      const objKeys = Object.keys(this.state.filter);
      let newFilter = {};
      for(let i = 0; i < objKeys.length; i++) {
        if(objKeys[i] === type) {
          newFilter = {
            [type]: newValue,
            ...newFilter,
          }
        } else {
          newFilter = {
            [objKeys[i]]: this.state.filter[objKeys[i]],
            ...newFilter,
          }
        }
      }
      this.setState({
        filter: newFilter,
      })
    } else {
      this.setState({
        filter: {
          [type]: newValue,
          ...this.state.filter,
        }
      })
    }
  }

  renderChildrenWithListener = (children) => {
    return children.map((data, i) => {
      return <div key={i} onChange={(e) => this.handleNewValue(e, data.props.children[1].props.type)}> { data } </div>
    })
  }

  render() {
    const { children } = this.props;
    return (
      <>
      <FilterIcon onClick={this.toggleFilterOpen} ><Filter /></FilterIcon>
      <Message><Text size="small" color="fontSecondary">Filter wurden angewendet</Text></Message>
        <Bar open={this.state.open}>
          <Row>
            {this.renderChildrenWithListener(children)}
          </Row>
          <Container className="actionContainer" full nop >
            <Row style={{padding: '15px'}}>
              <div>
                <Button style={{borderRadius: '50px', padding: '10px 20px 10px 20px'}} onClick={this.handleNewFilterDataOnSubmit} size="small" variant="primary" bgColor="secondary">ANWENDEN</Button>
              </div>
              <div>
                <Button style={{borderRadius: '50px', padding: '10px 20px 10px 20px'}} onClick={this.handleNewFilterDataOnSubmit} size="small" variant="primaryReversed">ZURÜCKSETZEN</Button>
              </div>
            </Row>
          </Container>
        </Bar>


      </>
    );
  }
}


export default FilterBarContainer;
