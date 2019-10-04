import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { ROOT_URL } from '../../../config'

import { Container, Row, Column, Title, Text, Image, Tag } from '../../../ui';
import { breakPoints } from '../../../ui/components/settings';

import { secondsToDate } from '../../utils/dateConverter';
import { createExcerpt } from '../../utils/createExcerpt';
import { renderTags } from '../../utils/renderTags';

import { SharePopUp } from '../share';

const Card = styled.div`
  border-radius: 16px;
  width: 100%;
  transition: 200ms;
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

export const BlogCard = React.memo((props) => {
  // renders the tags with different colors based on the string name

  const writtenBy = (user) => {
    for(let i = 0; i < user.length; i++) {
      if(user[i]._id === props.data._by) {
        return <NavLink to="/team/user"><span className="link" style={{fontWeight: '600'}}>{user[i].name}</span></NavLink>
      }
    }
  }

  return (
    <Card full nop>

        <Row>
          <NavLink to={`/blog/${props.data.title_slug}`}>
            <Column md={12}>
              <Image style={{cursor: 'pointer'}} style={{height: '100%', width: 'inherit'}} r="8px" src={ROOT_URL + '/storage/uploads' + props.data.image.path} />
            </Column>
          </NavLink>
          <Column md={12}>
            <NavLink to={`/blog/${props.data.title_slug}`}>
              <Text style={{paddingTop: '0', paddingBottom: '0', maxWidth: '400px', cursor: 'pointer'}} size="medium" weight="700">
                {props.data.title}
              </Text>
            </NavLink>
            <Text
              weight="400"
              style={{color: '#a6a6a6'}}
              size="xsmall"
            >
              von {writtenBy(props.user)} - {secondsToDate(props.data._created)}
            </Text>
            <Text style={{paddingTop: '0'}} size="small">{createExcerpt(props.data.content, 0, 100)}</Text>
            <Text style={{padding: '5px 0 15px 0'}} size="small">
              {renderTags(props.data.tags)}
            </Text>
            <Row justify="flex-start" style={{marginTop: 'auto'}}>
              <Column style={{padding: '0'}} s={6}>
                <NavLink to={`/blog/${props.data.title_slug}`}>
                  <Text style={{padding: '0', fontWeight: '600'}} size="small" color="primaryDark">- weiterlesen</Text>
                </NavLink>
              </Column>
              <Column style={{padding: '0'}} s={6}>
                <Row justify="flex-end" align="center">
                  <SharePopUp />
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
    </Card>
  )
});

export const SkelletonBlogCard = React.memo((props) => {
  return (
    <Card style={{ background: '#fafafa'}} full nop>
      <Row>
        <Column s={12}>
          <Image style={{border: '0', background: 'lightgrey', outline: '0', height: '200px'}} r="8px"  />
        </Column>
        <Column s={12}>
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
