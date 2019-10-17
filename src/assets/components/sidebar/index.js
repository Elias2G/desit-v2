import React, { Component } from 'react';
import styled from 'styled-components';

import { Row, Title, Text } from '../../../ui';
import { SmallBlogCard } from '../blog';

const Bar = styled.div`
  background: white;
  padding: 10px;
  border-radius: 16px;

  div {
    margin-right: 10px;
  }
`;

class Sidebar extends Component {

  renderRecent = (data) => {
    if(data !== null && this.props.user !== null) {
      return data.map((data, i) => {
        if(i >= 3) {
          return null;
        }
        return <SmallBlogCard user={this.props.user} data={data} />
      })
    } else {
      return <p>skelleton</p>
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Bar>
        <Text size="small" weight="600">{this.props.recent}</Text>
          {this.renderRecent(this.props.data)}
        <hr />
      </Bar>
    );
  }
}

export default Sidebar;
