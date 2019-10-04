import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_PORTFOLIO_LIST, LOAD_MORE_PORTFOLIO_LIST, SET_PORTFOLIO_LIST_CONFIG, SET_PORTFOLIO_LIST_FILTER } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { PortfolioListCard, SkelletonPortfolioListCard } from '../../assets/components/portfolio';
import { PortfolioLatest } from '../../assets/components/portfolio';

import { FilterBarContainer, Select } from '../../assets/components/filterBar';


class PortfolioList extends Component {
  componentDidMount() {
    if(this.props.portfolioEntrys === null) {
      this.props.simpleFetch(FETCH_PORTFOLIO_LIST, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, this.props.config);
    }
  }

  filter = (data, value) => {
    let body = this.props.config.body;
    let parsedBody = JSON.parse(body);

    let newConfig = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filter: value !== null ? data : {published: true},
        limit: 5,
        skip: 0,
        populate: 1,
        sort: {_created: -1}
      })
    }

    this.props.determine(SET_PORTFOLIO_LIST_CONFIG, newConfig)
    this.props.determine(SET_PORTFOLIO_LIST_FILTER, value)
    this.props.simpleFetch(FETCH_PORTFOLIO_LIST, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, newConfig);
  }

  renderPortfolioList = (data) => {
    //HAVE TO ADD THE FILTER FUNCTION
    if(this.props.portfolioEntrys !== null && this.props.user !== null) {
      return data.map((data, i) => {
        return(
          <Column key={i} s={12} md={4}>
            <PortfolioListCard
              user={this.props.user}
              data={data}
            />
          </Column>
        )
      })
    } else {
      let elements = [1,2,3,4,5];
      return elements.map((data, i) => {
        return(
          <Column key={i} s={12} md={4}>
            <SkelletonPortfolioListCard
              elements={5}
            />
          </Column>
        )
      })
    }
    return null
  }

  loadMore = () => {
    let body = this.props.config.body;
    let parsedBody = JSON.parse(body);

    if(this.props.total > this.props.portfolioEntrys.length) {
      let newConfig = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: parsedBody.filter,
          limit: parsedBody.limit + 5,
          skip: 0,
          populate: 1,
          sort: {_created: -1}
        })
      }

      this.props.determine(SET_PORTFOLIO_LIST_CONFIG, newConfig)
      this.props.simpleFetch(FETCH_PORTFOLIO_LIST, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, newConfig);
    }

  }

  render() {
    return (
      <>
        <Column s={12}>
          <FilterBarContainer data={this.props.filter} onChange={this.filter} >

          </FilterBarContainer>
        </Column>

        <Column s={12} style={{padding: '0'}}>
          <Masonry>
            {this.renderPortfolioList(this.props.portfolioEntrys)}
          </Masonry>
        </Column>


        <Column s={12}>
          {
            this.props.portfolioEntrys === null
            ? null
            : <Button
              disabled={this.props.total > this.props.portfolioEntrys.length ? false : true}
              onClick={this.loadMore}
              shadow="large"
              style={{margin: 'auto'}}
              size="small"
              variant="gradient"
              withGradient="secondary"
              toUppercase
            >
              mehr laden
            </Button>
          }

        </Column>
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    portfolioEntrys: data.portfolio.portfolioList,
    total: data.portfolio.total,
    config: data.portfolio.loadFromPortfolioList,
    filter: data.portfolio.filterBar,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(PortfolioList)
