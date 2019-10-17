import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch } from '../../redux/actions';
import { GET_USER } from '../../redux/actions/type';

import { ROOT_URL, GET_USER_API, masterkey } from '../../config';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image, Divider, SubTitle } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { HeaderHalf } from '../../assets/components/header';
import { HeadBar } from '../../assets/components/mobileHeadBar';

import PortfolioList from './portfolioList';
import PortfolioLatest from './portfolioLatest';

class Portfolio extends Component {
  componentDidMount() {

    setTimeout(() => {
      if(this.props.history.action === "PUSH") {
        window.scrollTo({top: 0})
      }
    },250);

    if(this.props.user === null) {
      this.props.simpleFetch(GET_USER, `${ROOT_URL + GET_USER_API}?token=${masterkey}`);
    }
  }
  render() {
    return (
      <>
      <HeadBar>
        <Text style={{padding: '0'}} size="xsmall">
          <span style={{color: '#acacac'}}>Portfolio</span>
        </Text>
      </HeadBar>

      <Container full nop style={{backgroundColor: 'white'}}>
        <HeaderHalf>
          <Row>
            <Column s={12}>
              <Title variant="h1" size="large" align="center">
                Neue Arbeiten, alte Arbeiten <br /> alle unserer Arbeiten.
              </Title>
              <Text size="small" align="center" style={{'marginTop': '50px'}}>
                The expert Team at Brightscout specializes in building innovative technology solutions
              </Text>
            </Column>
          </Row>
        </HeaderHalf>


        <Container big>
          <Row>
            <Column s={12}>
              <SubTitle color="primary" size="small" >NEU</SubTitle>
              <Title variant="h4" size="medium">Unsere letzten Arbeiten</Title>
            </Column>
          </Row>
          <Row>
            <PortfolioLatest />
          </Row>
          <Divider />
        </Container>

        <Container big>
          <Row>
            <Column s={12}>
              <SubTitle color="primary" size="small" >ALLE</SubTitle>
              <Title variant="h4" size="medium">Alle Arbeiten</Title>
            </Column>
          </Row>
          <Row>
            <PortfolioList />
          </Row>
        </Container>
      </Container>
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    user: data.user.userList,
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch }
)(Portfolio)
