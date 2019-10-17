import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_PORTFOLIO_LIST, LOAD_MORE_PORTFOLIO_LIST, SET_PORTFOLIO_LIST_CONFIG, SET_PORTFOLIO_LIST_FILTER } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column, Text } from '../../ui';
import { PortfolioListCard, SkelletonPortfolioListCard } from '../../assets/components/portfolio';
import { PortfolioLatest } from '../../assets/components/portfolio';

import { filterData, createReduxFilterObject } from '../../assets/utils/filterFunction';

import { FilterBarContainer, Select } from '../../assets/components/filterBar';


class PortfolioList extends Component {
  componentDidMount() {
    if(this.props.portfolioEntrys === null) {
      this.props.simpleFetch(FETCH_PORTFOLIO_LIST, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, this.props.config);
    }
  }

  filter = (newFilterObj) => {
    console.log(newFilterObj);
    let body = this.props.config.body;
    let parsedBody = JSON.parse(body);

    const data = filterData(parsedBody, newFilterObj);
    console.log(data);
    let newConfig = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filter: data,
        limit: 5,
        skip: 0,
        populate: 1,
        sort: {_created: -1}
      })
    }
    // create new filter object
    const reduxFilterData = createReduxFilterObject(newFilterObj);
    console.log(reduxFilterData);
    this.props.determine(SET_PORTFOLIO_LIST_CONFIG, newConfig)
    this.props.determine(SET_PORTFOLIO_LIST_FILTER, reduxFilterData)
    this.props.simpleFetch(FETCH_PORTFOLIO_LIST, `${ROOT_URL + GET_COLLECTION}/portfolio?token=${masterkey}`, newConfig);
  }

  renderPortfolioList = (data) => {
    //HAVE TO ADD THE FILTER FUNCTION
    if(this.props.portfolioEntrys !== null && this.props.user !== null) {
      if(this.props.total === 0) {
        return <div style={{padding: '15px'}}><img style={{width: "100%", height: "100%"}} src="https://via.placeholder.com/1000x500" /></div>
      }
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
          <FilterBarContainer filter={this.filter} filterBarData={this.props.filter}>
            <div style={{padding: '10px'}}>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Bereich</Text>
              <Select type="category" options={this.props.filter.category.select} fieldValue={this.props.filter.category.value} />
            </div>
            <div style={{padding: '10px'}}>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Arbeit</Text>
              <Select type="worked" options={this.props.filter.worked.select} fieldValue={this.props.filter.worked.value} />
            </div>
            <div style={{padding: '10px'}}>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Autor</Text>
              <Select type="_by" options={this.props.filter._by.select} fieldValue={this.props.filter._by.value} />
            </div>
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
          {
            this.props.portfolioEntrys === null
            ? null
            : <Text align="center" size="xsmall">{this.props.portfolioEntrys.length} von {this.props.total} Einträgen geladen</Text>
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
