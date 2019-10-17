import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { ROOT_URL } from '../../../config';

import { secondsToDate } from '../../utils/dateConverter';
import { renderTags } from '../../utils/renderTags';

import { Container, Row, Column, Title, Text, Image, Tag, SubTitle } from '../../../ui';
import { breakPoints } from '../../../ui/components/settings';
import { Plus } from '../../media/icons';

const Card = styled.div`
  border-radius: 16px;
  width: 100%;
  transition: 200ms;
  cursor: pointer;
  padding: 5px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  background: white;
  position: relative;
  display: block;
  margin-bottom: 25px;

  :hover {
    box-shadow: 0 0 40px rgba(0,0,0,0.2);
    transition: 200ms;
  }

  div.innerContainer {
    opacity: 0;
    position: absolute;
    display: block;
    background: linear-gradient(40deg, rgba(58, 200, 200, 0.5), rgba(0, 84, 133, 0.5));
    border-radius: 8px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    padding: 10px;
    transition: 300ms;

    :hover {
      transition: 300ms;
      opacity: 1;

      svg {
        transition: 400ms;
        transform: scale(0.7);
      }
    }

    svg {
      transition: 400ms;
      fill: white;
      transform: scale(0.5);
    }
  }

  @media ${breakPoints.md} {
    box-shadow: none;
    margin-bottom: 0px;
    padding: 0;
  }

`;

export const PortfolioLatestCard = React.memo((props) => {

  const writtenBy = (user) => {
    for(let i = 0; i < user.length; i++) {
      if(user[i]._id === props.data._by) {
        return user[i].name;
      }
    }
  }

  return (
    <Card full nop>
      <NavLink to={`/portfolio/${props.data.title_slug}`}>
        <Row>
          <Column s={12}>
            <Image r="8px" src={ROOT_URL + '/storage/uploads' + props.data.image.path} />
            <div className="innerContainer" style={{position: 'absolute'}}>
              <Text color="fontSecondary" style={{paddingTop: '0', paddingBottom: '0'}} size="medium" weight="600">
                {props.data.title}
              </Text>
              <Text color="fontSecondary" size="small" weight="600" style={{paddingBottom: '2px'}}>{props.data.category}</Text>
              <Text style={{paddingTop: '0'}} size="small">
                {renderTags(props.data.worked)}
              </Text>
              <div style={{width: '100px', margin: 'auto', postition: 'absolute', marginTop: 'calc(25% - 50px)'}}>
                <Plus />
              </div>
              <Text
                weight="400"
                color="fontSecondary"
                size="xsmall"
                style={{position: 'absolute', bottom: '0'}}
              >
                von {writtenBy(props.user)}, am {secondsToDate(props.data._created)}
              </Text>
            </div>
          </Column>
        </Row>
      </NavLink>
    </Card>
  )
});

export const SkelletonPortfolioLatestCard = React.memo((props) => {
  return (
    <Card style={{ background: '#fafafa'}} full nop>
      <Row style={{height: '100%', paddingTop: '100%'}}>
        <Column style={{height: '100%'}} s={12}>
          <div style={{background: '#ebebeb', height: '96%', width: '96%', position: 'absolute', top: '2%', left: '2%', border: '0'}} r="8px"  ></div>
          <div className="" style={{position: 'absolute', top: '5%', left: '5%', width: '90%', height: '90%', zIndex: '5'}}>
            <Text color="fontSecondary" style={{height: '20px', width: '200px', background: 'grey'}} size="medium" weight="600">
            </Text>
            <Text color="fontSecondary" style={{height: '10px', width: '130px', background: 'lightgrey', marginTop: '3%'}} size="medium" weight="600">
            </Text>
            <Text color="fontSecondary" style={{height: '10px', width: '30px', background: 'lightgrey', marginTop: '3%'}} size="medium" weight="600">
            </Text>
            <div style={{width: '100px', margin: 'auto', postition: 'absolute', marginTop: 'calc(25% - 50px)', opacity: '0.1'}}>
              <Plus />
            </div>
            <Text color="fontSecondary" style={{height: '10px', width: '30px', background: 'lightgrey', marginTop: '3%', bottom: '0'}} size="medium" weight="600">
            </Text>
          </div>
        </Column>
      </Row>
    </Card>
  )
});
