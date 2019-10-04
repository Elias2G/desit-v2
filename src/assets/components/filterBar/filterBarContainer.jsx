import React, { Component } from 'react';
import styled from 'styled-components';

import { Row } from '../../../ui';

const Bar = styled.div`
  background: white;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  border-radius: 16px;

  div {
    margin-right: 10px;
  }
`;

class FilterBarContainer extends Component {
  handleNewValue = (e, type) => {
    const { value } = e.target;

    let newValue;

    value === "Alle" ? newValue = null : newValue = value;

    this.props.filter(newValue, type);
  }

  renderChildrenWithListener = (children) => {
    return children.map((data, i) => {
      return <div key={i} onChange={(e) => this.handleNewValue(e, data.props.children[1].props.type)}> { data } </div>
    })
  }

  render() {
    const { children } = this.props;
    return (
      <Bar>
        <Row>
          {this.renderChildrenWithListener(children)}
        </Row>
      </Bar>
    );
  }
}


export default FilterBarContainer;
