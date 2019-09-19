import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
  height: 6px;
  max-width: 150px;
  border: 0;
  background-color: ${props =>
    props.primary ? '#20D1D1' : props.secondary ? '#C926D1' : props.tertiary ? '#3AC856' : 'black'
  };
  margin: ${props => props.left ? 0 : 'auto' };

  margin-top: 50px;
  margin-bottom: 15px;
`;

export const Line = (props) => (
  <Hr {...props} />
);
