import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_PORTFOLIO_LATEST, SET_PORTFOLIO_LIST_CONFIG, FETCH_PORTFOLIO_LIST } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { PortfolioLatestCard, SkelletonPortfolioLatestCard } from '../../assets/components/portfolio';

class PortfolioLatest extends Component {
  componentDidMount() {
    if(this.props.portfolioLatest === null) {
      this.props.simpleFetch(FETCH_PORTFOLIO_LATEST, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { published: true },
          limit: 3,
          skip: 0,
          populate: 1, // resolve linked collection items
          sort: {_created: -1}
        })
      });
    }
  }

  renderPortfolioList = (data) => {
    if(this.props.portfolioLatest !== null && this.props.user !== null) {
      return data.map((data, i) => {
        if(i === 0) {
          return(
            <Column key={i} nop s={12} ml={8}>
              <PortfolioLatestCard
                user={this.props.user}
                data={data}
              />
            </Column>
          )
        } else {
          return(
            <Column key={i} nop s={12} ml={4}>
              <PortfolioLatestCard
                user={this.props.user}
                data={data}
              />
            </Column>
          )
        }
      })
    } else {
      let elements = [1,2,3];
      return elements.map((data, i) => {
        return(
          <Column key={i} nop s={12} ml={4}>
            <SkelletonPortfolioLatestCard elements={3} />
          </Column>
        )
      })
    }
    return null
  }


  render() {
    return (
      <>
        {this.renderPortfolioList(this.props.portfolioLatest)}
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    portfolio: data.portfolio.portfolioList,
    portfolioLatest: data.portfolio.latest,
    config: data.portfolio.loadFromPortfolioList,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(PortfolioLatest)
