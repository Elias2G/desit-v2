import React, { Component } from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { SearchField } from './searchField';
import { MultipleSelect } from './multipleSelect';

import { Container, Row, Column, Title, Text, Image, Tag, SubTitle } from '../../../ui';
import { breakPoints } from '../../../ui/components/settings';

const StyledBar = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
`;

export default class FilterBar extends Component {
  render() {
    return (
      <Container full nop>
        <Row>
          <Column s={3}>
            <MultipleSelect value={this.props.data.category.value} options={this.props.data.category.select} onChange={this.props.onChange}  />
          </Column>
        </Row>
      </Container>
    );
  }
}
