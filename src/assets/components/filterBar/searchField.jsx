import React from 'react';

import styled from 'styled-components';

const Field = styled.input`
  width: auto;
  max-width: 200px;
  border-radius: 25px;
  font-size: calc(9pt + 0.25rem);
  padding: 8px 16px;
  border: 1px solid #d4cdcd;

  ::placeholder {
    opacity: 0.5;
  }
`;

export const SearchField = (props) => (
  <Field {...props} value={props.value} placeholder="search" />
);
