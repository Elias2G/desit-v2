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
  background: white;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);

  :hover {
    box-shadow: 0 0 40px rgba(0,0,0,0.2);
    transition: 200ms;
    .readMore {
      transform: translateX(10px);
      transition: 200ms;
    }
  }

  @media ${breakPoints.md} {
    border-radius: 16px;
    box-shadow: none;
    margin-bottom: 25px;
    padding: 0;
  }

  .excerptStyle {
    padding: 10px 0 0 0 !important;

    @media ${breakPoints.md} {
      padding: 15px 0px;
    }
  }

  .readMore {
    position: relative;
    transition: 200ms;
    :hover {
      color: red;
    }
  }

`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const BlogCard = React.memo((props) => {
  // renders the tags with different colors based on the string name
  const writtenBy = (user) => {
    for(let i = 0; i < user.length; i++) {
      if(user[i]._id === props.data._by) {
        return <span style={{fontWeight: '400'}}>{user[i].name}</span>
      }
    }
  }

  const useRightImage = () => {
    let image;
    const imageArray = props.data.image.styles;
    const windowWidth = window.innerWidth;
    for(let i = 0; i < imageArray.length; i++) {
      if(imageArray[i].style === "mediumSmallPreview" && windowWidth <= 768) {
        return image = imageArray[i].path;
      }
      if(imageArray[i].style === "mediumPreview" && windowWidth > 768) {
        return image = imageArray[i].path;
      }
    }
  }

  return (
    <Card full nop>
        <Row>

          {props.data.image.path === undefined
            ? null
            : <NavLink to={`/blog/${props.data.title_slug}`}>
                <Column style={{paddingBottom: '0'}} md={12}>
                  <BlogImage alt={props.data.title} style={{cursor: 'pointer'}} r="8px" src={ROOT_URL + '/' + useRightImage()} />
                </Column>
              </NavLink>
          }


          <Column md={12}>
            <NavLink to={`/blog/${props.data.title_slug}`}>
              <Text style={{paddingTop: '5px', paddingBottom: '0', lineHeight: '1.4', cursor: 'pointer'}} size="large" weight="600">
                  {props.data.title}
              </Text>
            </NavLink>

            <Text
              weight="400"
              style={{color: '#a6a6a6', padding: '5px 0 0 0'}}
              size="xsmall"
              >
              von {writtenBy(props.user)} - {secondsToDate(props.data._created)}
            </Text>

            <Text className="excerptStyle" size="small">{createExcerpt(props.data.excerpt, 0, 120)}</Text>

            <Text style={{padding: '5px 0 0px 0'}} size="small">
              {renderTags(props.data.category)} {renderTags(props.data.tags)}
            </Text>

            {
              window.innerWidth > 992
              &&
              <Row justify="flex-start" style={{marginTop: 'auto'}}>
                <Column style={{padding: '0'}} s={8}>
                  <NavLink to={`/blog/${props.data.title_slug}`}>
                    <Text className="readMore" style={{paddingBottom: '0'}} size="small" weight="600" color="primaryDark">weiterlesen</Text>
                  </NavLink>
                </Column>
                <Column style={{padding: '0'}} s={4}>
                  <Row justify="flex-end" align="bottom">
                    <SharePopUp />
                  </Row>
                </Column>
              </Row>
            }

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


export const SmallBlogCard = React.memo((props) => {
  // renders the tags with different colors based on the string name
  const writtenBy = (user) => {
    for(let i = 0; i < user.length; i++) {
      if(user[i]._id === props.data._by) {
        return <span style={{fontWeight: '400'}}>{user[i].name}</span>
      }
    }
  }
  return (
    <div style={{marginBottom: '10px'}}>
        <Row align="center" justify="center">
          <Column style={{padding: '0'}} s={2}>
            { props.data.image.path === undefined
              ? null
              : <NavLink to={`/blog/${props.data.title_slug}`}>
                  <Image style={{cursor: 'pointer'}} style={{height: '50px', width: '50px'}} r="8px" src={ROOT_URL + '/storage/uploads' + props.data.image.path} />
                </NavLink>
            }
          </Column>


          <Column style={{padding: '0'}} s={9}>
            <NavLink to={`/blog/${props.data.title_slug}`}>
              <Text style={{padding: '0', lineHeight: '1.4', cursor: 'pointer'}} size="small" weight="700">
                {props.data.title}
              </Text>
            </NavLink>
            <Text
              weight="400"
              style={{color: '#a6a6a6', padding: '0px 0 0 0'}}
              size="xsmall"
            >
              von {writtenBy(props.user)} - {secondsToDate(props.data._created)}
            </Text>
          </Column>
        </Row>
    </div>
  )
});
