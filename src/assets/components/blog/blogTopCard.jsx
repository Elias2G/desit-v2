import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { ROOT_URL } from '../../../config'

import { Container, Row, Column, Title, Text, Image, Tag, SubTitle } from '../../../ui';
import { breakPoints } from '../../../ui/components/settings';

import { secondsToDate } from '../../utils/dateConverter';
import { createExcerpt } from '../../utils/createExcerpt';
import { renderTags } from '../../utils/renderTags';

const Card = styled.div`
  width: 100%;
  transition: 200ms;
  cursor: pointer;
  border-radius: 16px;
  padding: 5px;
  margin-bottom: 25px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  background: white;

  :hover {
    box-shadow: 0 0 40px rgba(0,0,0,0.2);
    transition: 200ms;
  }

  @media ${breakPoints.md} {
    box-shadow: none;
    margin-bottom: 25px;
    padding: 0;
  }

`;

export const BlogTopCard = React.memo((props) => {

  // renders the tags with different colors based on the string name
  const renderTags = (data) => {
    return data.map((data, i) => {
      return (
        data.toLowerCase() === 'technologie' ? <Tag key={i} bgColor="primaryDark" color="fontSecondary">{data}</Tag> :
        data.toLowerCase() === 'wissenswertes' ? <Tag key={i} bgColor="secondaryDark" color="fontSecondary">{data}</Tag> :
        data.toLowerCase() === 'design' ? <Tag key={i} bgColor="tertiaryDark" color="fontSecondary">{data}</Tag> : ''
      )
    })
  }

  const writtenBy = (user) => {
    for(let i = 0; i < user.length; i++) {
      if(user[i]._id === props.data._by) {
        return <NavLink to="/team/user"><span className="link" style={{fontWeight: '600'}}>{user[i].name}</span></NavLink>
      }
    }
  }

  return (
    <NavLink to={`/blog/${props.data.title_slug}`}>
      <Card full nop>
        <Row>
          <Column s={12} md={6}>
            <div style={{position: 'absolute', padding: '10px 20px'}}>
              <SubTitle style={{position: 'relative'}} color="primary" size="large" >TOP-BEITRAG</SubTitle>
            </div>
            <Image r="8px" src={ROOT_URL + '/storage/uploads' + props.data.image.path} />
          </Column>
          <Column s={12} md={6}>
            <Title variant="h3" size="medium">
              {props.data.title}
            </Title>
            <Text
              weight="400"
              style={{paddingBottom: '0px', color: '#a6a6a6'}}
              size="xsmall"
            >
              von {writtenBy(props.user)}, am {secondsToDate(props.data._created)}
            </Text>
            <Text size="small">{createExcerpt(props.data.content, 0, 200)}</Text>
            <Text style={{padding: '5px 0 15px 0'}} size="small">
              {renderTags(props.data.tags)}
            </Text>
            <div style={{width: "100%", bottom: '0', marginTop: "auto", pointerEvents: 'none'}}>
              <Text style={{padding: '0', fontWeight: '600'}} size="small" color="primaryDark">- weiterlesen</Text>
            </div>
          </Column>
        </Row>
      </Card>
    </NavLink>
  )
});

export const SkelletonBlogTopCard = React.memo((props) => {
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
