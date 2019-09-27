import React from 'react';

import styled from 'styled-components';
import { breakPoints } from '../../../ui/components/settings/settings';

const ShareStyle = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-color: #ebebeb;
  border-radius: 100%;
  margin: 5px;

  @media ${breakPoints.ms} {
    width: 50px;
    height: 50px;
  }

  @media ${breakPoints.md} {
    width: 70px;
    height: 70px;
  }

  @media ${breakPoints.ml} {
    width: 85px;
    height: 85px;
  }

  @media ${breakPoints.lg} {
    width: 100px;
    height: 100px;
  }
`;

export const Share = (props) => (
  <ShareStyle {...props}>
    {props.children}
  </ShareStyle>
);
