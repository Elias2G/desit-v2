import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Title, Text, Image, Tag, SubTitle } from '../../../ui';
import { breakPoints } from '../../../ui/components/settings';

const Card = styled.div`
  margin: 25px 0 25px 0;
  border-radius: 12px;
  width: 100%;
  transition: 200ms;
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;

  :hover {
    box-shadow: 0 0 40px rgba(0,0,0,0.2);
    transition: 200ms;
  }

  @media ${breakPoints.md} {
    border-bottom: none;
    border-radius: 16px;
  }
`;

export const BlogLatestCard = React.memo((props) => {

  // renders the tags with different colors based on the string name
  const renderTags = (data) => {
    return data.map((data, i) => {
      return data.toLowerCase() === 'technologie' ? <Tag key={i} bgColor="primaryDark" color="fontSecondary">{data}</Tag> :
      data.toLowerCase() === 'wissenswertes' ? <Tag key={i} bgColor="secondary" color="fontSecondary">{data}</Tag> : ''
    })
  }

  const createExcerpt = (data) => {
    let regex = /(<([^>]+)>)/ig;
    let removedHtml = data.replace(regex, "");
    let createArrayFromString = removedHtml.split("");
    let reduceArrayLength = createArrayFromString.splice(0, 200);
    let arrayToString = reduceArrayLength.join('');
    return arrayToString;
  }

  return (
    <NavLink to={`/blog/${props.data.title_slug}`}>
      <Card full nop>
        <Row>
          <Column s={12}>
            <Image r="8px" src={'http://127.0.0.1/cockpit-desit/storage/uploads' + props.data.image.path} />
          </Column>
          <Column s={12}>
            <Text size="medium" weight="700">
              {props.data.title}
            </Text>
            <Text size="small">{props.data._by}</Text>
            <Text size="small">
              {renderTags(props.data.tags)}
            </Text>
            <Text size="small">{createExcerpt(props.data.content)}</Text>
            <div style={{width: "100%", bottom: '0', marginTop: "auto", pointerEvents: 'none'}}>
              <Text size="small" color="primary">weiterlesen</Text>
            </div>
          </Column>
        </Row>
      </Card>
    </NavLink>
  )
});
