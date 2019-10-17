import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { NavLink } from 'react-router-dom';

import { ROOT_URL } from '../../../config'

import { Container, Row, Column, Title, Text, Image, Tag } from '../../../ui';
import { breakPoints } from '../../../ui/components/settings';

import { secondsToDate } from '../../utils/dateConverter';
import { createExcerpt } from '../../utils/createExcerpt';
import { renderTags } from '../../utils/renderTags';

import { SharePopUp } from '../share';

const Card = styled.div`
  padding: 8px;
  margin-bottom: 15px;
`;

const BlogImage = styled.img`
  z-index: 100;
  width: auto;
  height: 50vh;
  position: relative;
  filter: brightness(80%);
`;

export const BlogCardSlider = React.memo((props) => {
  // renders the tags with different colors based on the string name
  const writtenBy = (user) => {
    for(let i = 0; i < user.length; i++) {
      if(user[i]._id === props.data._by) {
        return <span style={{fontWeight: '400'}}>{user[i].name}</span>
      }
    }
  }

  return (
    <Card full nop>

      <div style={{boxShadow: '2px 2px 8px rgba(0,0,0,0.4)', borderRadius: '8px', position: 'relative'}}>
        {props.data.image.path === undefined
          ? null
          : <NavLink to={`/blog/${props.data.title_slug}`}>
              <Column style={{padding: '0', overflow: 'hidden', borderRadius: '8px'}} md={12}>
                <BlogImage style={{cursor: 'pointer'}} src={ROOT_URL + '/storage/uploads' + props.data.image.path} />
              </Column>
            </NavLink>
        }
        <div style={{position: 'absolute', zIndex: '996', top: '0', padding: '15px', display: 'inline'}}>
          <NavLink to={`/blog/${props.data.title_slug}`}>
            <Text color="fontSecondary" style={{paddingTop: '10px', paddingBottom: '0', lineHeight: '1.4', cursor: 'pointer'}} size="large" weight="700">
                {props.data.title}
            </Text>
          </NavLink>

          <Text
            weight="400"
            style={{color: '#ebebeb', padding: '5px 0 0 0'}}
            size="xsmall"
            >
            von {writtenBy(props.user)} - {secondsToDate(props.data._created)}
          </Text>

          
        </div>
      </div>


    </Card>
  )
});

export const SkelletonBlogCardSlider = React.memo((props) => {
  return (
    <Card style={{ background: '#fafafa'}} full nop>

    </Card>
  )
});
