import React from 'react';

import styled from 'styled-components';
import { SelectField, Text, Option } from '../../../ui';




export default class Select extends React.Component {

  renderOptionList = (options) => {
    return options.map((data, i) => {
      return <Option key={i}>{data}</Option>
    })
  }

  render() {
    return (
      <SelectField>
        <Option>Alle</Option>
        {this.renderOptionList(this.props.options)}
      </SelectField>
    )
  }
};
