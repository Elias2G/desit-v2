import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOSTS_LIST, LOAD_MORE_BLOGPOSTS_LIST, SET_BLOGPOSTS_LIST_CONFIG, SET_BLOGPOSTS_LIST_FILTER } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Button, Column, Text } from '../../ui';
import { BlogCard, SkelletonBlogCard } from '../../assets/components/blog';
import Sidebar from '../../assets/components/sidebar';

import { filterData, createReduxFilterObject } from '../../assets/utils/filterFunction';

import {Select, FilterBarContainer} from '../../assets/components/filterBar';


class BlogList extends Component {
  componentDidMount() {
    if(this.props.blogPosts === null) {
      this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, this.props.config);
    }
  }

  filter = (newFilterObj) => {
    let body = this.props.config.body;
    let parsedBody = JSON.parse(body);

    // takes 2 arguments [ the old search data ] [ a object with the new search data ]
    const data = filterData(parsedBody, newFilterObj);
    // create a new config object for the fetch call
    let newConfig = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filter: data, // data is a object with search querys
        limit: 5,
        skip: 0,
        populate: 1,
        sort: {_created: -1}
      })
    }
    // create new filter object
    const reduxFilterData = createReduxFilterObject(newFilterObj);

    this.props.determine(SET_BLOGPOSTS_LIST_CONFIG, newConfig)
    this.props.determine(SET_BLOGPOSTS_LIST_FILTER, reduxFilterData)
    this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, newConfig);
  }

  renderBlogList = (data) => {
    // checks if the fetch call for user and blogpost is finished
    if(this.props.blogPosts !== null && this.props.user !== null) {
      if(this.props.total === 0) {
        return <div style={{padding: '15px'}}><img style={{width: "100%", height: "100%"}} src="https://via.placeholder.com/1000x500" /></div>
      }
      return data.map((data, i) => (
        <Column key={i} md={6}>
          <BlogCard
            user={this.props.user}
            data={data}
          />
        </Column>
      ))
    } else {
      let elements = [1,2,3,4,5];
      return elements.map((data, i) => (
        <Column md={6} key={i}>
          <SkelletonBlogCard />
        </Column>
      ))
    }
  }

  loadMore = () => {
    let body = this.props.config.body;
    let parsedBody = JSON.parse(body);

    if(this.props.total > this.props.blogPosts.length) {
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

      this.props.determine(SET_BLOGPOSTS_LIST_CONFIG, newConfig);
      this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, newConfig);
    }
  }

  render() {
    return (
      <>
        <Column s={0} md={12}>
          <FilterBarContainer filter={this.filter} filterData={this.props.filter}>
            <div style={{padding: '10px'}}>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Kategorie</Text>
              <Select type="category" options={this.props.filter.category.select} fieldValue={this.props.filter.category.value} />
            </div>
            <div style={{padding: '10px'}}>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Autor</Text>
              <Select type="_by" options={this.props.filter._by.select} fieldValue={this.props.filter._by.value} />
            </div>
          </FilterBarContainer>
        </Column>

        <Column style={{padding: '0'}} md={12} lg={8}>
          <Masonry>
              {this.renderBlogList(this.props.blogPosts)}
          </Masonry>
        </Column>
        {
          window.innerWidth > 768
          ? <Column nop md={4} lg={4}>
              <div style={{position: 'sticky', top: '100px'}}>
                <Container full nop>
                  <Sidebar recent="Letzte Beiträge" data={this.props.blogPosts} user={this.props.user}/>
                </Container>
              </div>
            </Column>
          : null
        }
        <Column s={12}>
          {
            this.props.blogPosts === null
            ? null
            : <Button
              disabled={this.props.total > this.props.blogPosts.length ? false : true}
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
            this.props.blogPosts === null
            ? null
            : <Text align="center" size="xsmall">{this.props.blogPosts.length} von {this.props.total} Einträgen geladen</Text>
          }
        </Column>
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    blogPosts: data.blog.blogList,
    total: data.blog.total,
    config: data.blog.loadFromBlogList,
    filter: data.blog.filterBar,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogList)
