import React from 'react';

import styled from 'styled-components';
import { FormTag, FormIcon, Field, Selection, Option } from '../../../ui';


export class MultipleSelect extends React.Component {
  state = {
    open: true,
  }

  handleChange = (e) => {
    this.props.onChange({value: e.target.value, type: 'select', field: 'category'});
  }

  openSelection = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Field onClick={this.openSelection}>
          {this.props.value.map((data, i) => {
            return (
              <FormTag key={i}>{data}<FormIcon /></FormTag>
            )
          })}
        </Field>
        {
          this.state.open
          ? <Selection>
              {this.props.options.map((data, i) => {
                for(var i = 0; i < this.props.value.length; i++) {
                  if(data === this.props.value[i]) {
                    return (
                      <Option onClick={this.handleSelectionChange} active >{data}</Option>
                    )
                  }
                }
                return <Option onClick={this.handleSelectionChange}>{data}</Option>
              })}
            </Selection>
          : null
        }
      </div>
    )
  }
};
