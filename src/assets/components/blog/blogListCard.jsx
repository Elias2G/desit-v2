import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Title, Text, Image, Tag } from '../../../ui';
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

export const BlogListCard = React.memo((props) => {
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
    <Card full nop>
      <NavLink to={`/blog/${props.data.title_slug}`}>
        <Row>
          <Column md={4}>
            <Image r="8px" src={'http://127.0.0.1/cockpit-desit/storage/uploads' + props.data.image.path} />
          </Column>
          <Column md={8}>
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
      </NavLink>
    </Card>
  )
});

export const SkelletonBlogListCard = React.memo((props) => {
  return (
    <Card style={{ background: '#fafafa'}} full nop>
      <Row>
        <Column md={4}>
          <Image style={{border: '0', background: 'lightgrey', outline: '0'}} r="8px"  />
        </Column>
        <Column md={8}>
          <Text style={{background: 'lightgrey', width: '70%', margin: '15px 0'}}></Text>
          <Text style={{background: '#ebebeb', width: '20%', margin: '15px 0'}} size="small"></Text>
          <Text size="small" style={{width: '100%'}}>
            <Tag style={{background: 'lightgrey', width: '50px'}} color="fontSecondary"></Tag>
            <Tag style={{background: 'lightgrey', width: '50px'}} color="fontSecondary"></Tag>
          </Text>
          <Text style={{background: '#ebebeb', width: '85%', margin: '15px 0 2px 0'}}></Text>
          <Text style={{background: '#ebebeb', width: '90%', margin: '2px 0'}}></Text>
          <Text style={{background: '#ebebeb', width: '30%', margin: '2px 0'}}></Text>
          <div style={{width: "100%", bottom: '0', marginTop: "auto", pointerEvents: 'none'}}>
            <Text size="small" style={{backgroundColor: '#ebebeb', width: '10%', margin: '15px 0'}}></Text>
          </div>
        </Column>
      </Row>
    </Card>
  )
});
