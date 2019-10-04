import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../../redux/actions';
import { ACTIVE_VIEW_PORTFOLIO, GET_USER } from '../../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, GET_USER_API, masterkey } from '../../../config';

import { Container, Row, Button, Column, Title, Text, Image, Tag, Divider, SubTitle } from '../../../ui';
import { FbShare } from '../../../assets/components/share';
import PortfolioLatest from '../portfolioLatest';
import { HeaderHalf } from '../../../assets/components/header';
import { Head, MoveBackNav } from './styled';

class SingleWork extends Component {
  componentDidMount() {
    setTimeout(() => {
      if(this.props.history.action === "PUSH") {
        window.scrollTo({top: 0})
      }
    },500);

    if(this.props.portfolioList !== null) {
      const { portfolioList } = this.props;
      const searchValue = this.props.match.params.id;

      for(var i = 0; i < portfolioList.length; i++) {
        if(portfolioList[i].title_slug === searchValue) {
          this.props.determine(ACTIVE_VIEW_PORTFOLIO, {entries: [portfolioList[i]]})
          return;
        }
      }
    } else {
      let newConfig = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { published: true, title_slug: this.props.match.params.id },
          limit: 1,
          skip: 0,
          populate: 1,
        })
      }
      this.props.simpleFetch(ACTIVE_VIEW_PORTFOLIO, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, newConfig);
      if(this.props.user.userList === null) {
        this.props.simpleFetch(GET_USER, `${ROOT_URL + GET_USER_API}?token=${masterkey}`);
      }
    }
  }

  renderTags = (data) => {
    return data.map((data, i) => {
      return data.toLowerCase() === 'technologie' ? <Tag key={i} bgColor="primaryDark" color="fontSecondary">{data}</Tag> :
      data.toLowerCase() === 'wissenswertes' ? <Tag key={i} bgColor="secondary" color="fontSecondary">{data}</Tag> : ''
    })
  }

  renderSingleWork = (passedData) => {
    if(this.props.thisPortfolio !== null) {
      let data = passedData.entries[0];
      return (
        <>
          <Title variant="h1" size="medium">{data.title}</Title>
          <Text size="small">{data._by}</Text>
          <Text size="small">
            {this.renderTags(data.tags)}
          </Text>
          <Container nop style={{margin: '10px 0'}} >
            <div className="singleWorkStyle" dangerouslySetInnerHTML={{__html: data.content}} />
          </Container>
        </>
      );
    }
  }


  render() {
    console.log(this.props);
    return (
      <>
      <Container full nop style={{background: 'white'}}>
        <Head image={ this.props.thisPortfolio !== null ? 'http://127.0.0.1/cockpit-desit/storage/uploads' + this.props.thisPortfolio.entries[0].image.path : null } />

        <Container big style={{paddingTop: '50px'}}>
          <Row>
            <Column ml={9}>
                {this.renderSingleWork(this.props.thisPortfolio)}
            </Column>
            <Column nop md={3}>
              <div style={{height: '100%', width: '100%', background: '#ebebeb'}}>
                <div style={{height: '500px', widht: '100%', background: 'grey', position: 'sticky', top: '100px'}}>

                </div>
              </div>
            </Column>
            <Column s={12}>
              <Divider />
              <Row>
                <Column s={12} md={6} style={{padding: '0'}}>
                  <MoveBackNav passed={this.props.history} />
                </Column>
                <Column s={12} md={6} nop>
                  <Row justify="flex-end">
                    <div style={{background: '#2b2b2b', width: '30px', height: '30px', borderRadius: '100%', marginRight: '10px'}} ></div>
                    <div style={{background: '#2b2b2b', width: '30px', height: '30px', borderRadius: '100%', marginRight: '10px'}} ></div>
                    <div style={{background: '#2b2b2b', width: '30px', height: '30px', borderRadius: '100%', marginRight: '10px'}} ></div>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Row>

          <Row style={{marginTop: '50px'}}>
            <Column s={12}>
              <SubTitle color="primary" size="small" >NEU</SubTitle>
              <Title variant="h4" size="medium">Unsere letzten Beiträge</Title>
            </Column>
          </Row>
          <Row>
            <PortfolioLatest />
          </Row>
        </Container>
      </Container>
      </>
    );
  }
}


const mapStateToProps = (data) => {
  return {
    thisPortfolio: data.portfolio.thisPortfolio,
    portfolioList: data.portfolio.thisPortfolio,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch }
)(SingleWork)
