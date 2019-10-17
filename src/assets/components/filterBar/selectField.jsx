import React from 'react';

import styled from 'styled-components';
import { SelectField, Text, Option } from '../../../ui';




export default class Select extends React.Component {

  renderOptionList = (options, fieldValue) => {
    return options.map((data, i) => {
      return <Option key={i}>{data}</Option>
    })
  }

  render() {
    return (
      <SelectField defaultValue={this.props.fieldValue}>
        <Option>Alle</Option>
        {this.renderOptionList(this.props.options)}
      </SelectField>
    )
  }
};
