import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch } from '../../redux/actions';
import { GET_USER } from '../../redux/actions/type';

import { ROOT_URL, GET_USER_API, masterkey } from '../../config';

import { Container, Title, Text, Row, Column, Divider, SubTitle } from '../../ui';

import { HeaderHalf } from '../../assets/components/header';
import { HeadBar } from '../../assets/components/mobileHeadBar';

import BlogList from './blogList';
import BlogLatest from './blogLatest';
import BlogTop from './blogTop';

class Blog extends Component {
  componentDidMount() {
    setTimeout(() => {
      if(this.props.history.action === "PUSH") {
        window.scrollTo({top: 0})
      }
    },250);
    //get data from the author of blog and / or portfolio entries
    if(this.props.user === null) {
      this.props.simpleFetch(GET_USER, `${ROOT_URL + GET_USER_API}?token=${masterkey}`);
    }
  }
  render() {
    return (
      <>
      <HeadBar>
        <Text style={{padding: '0'}} size="xsmall">
          <span style={{color: '#acacac'}}>Blog</span>
        </Text>
      </HeadBar>

      <Container full nop style={{backgroundColor: 'white'}}>
        <HeaderHalf>
          <Row>
            <Column s={12}>
              <Title variant="h1" size="large" align="center">
                Neue Nachrichten, Wissenswertes <br /> und lustiges.
              </Title>
              <Text size="small" align="center" style={{'marginTop': '50px'}}>
                The expert Team at Brightscout specializes in building innovative technology solutions
              </Text>
            </Column>
          </Row>
        </HeaderHalf>

        {/* Top Beitrag Bereich */}
        <Container big>
          <Row>
            <Column s={12}>
              <SubTitle color="primary" size="small" >EMPFOHLEN</SubTitle>
              <Title variant="h4" size="medium">Unsere Empfehlungen</Title>
            </Column>
            <BlogTop />
          </Row>
          <BlogLatest />
          <Divider />
        </Container>

        <Container big>
          <Row>
            <Column s={12}>
              <SubTitle color="primary" size="small" >ALLE</SubTitle>
              <Title variant="h4" size="medium">Alle Beiträge</Title>
            </Column>
          </Row>
          <Row>
            <BlogList />
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
)(Blog)
