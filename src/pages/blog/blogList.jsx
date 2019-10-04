import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOSTS_LIST, LOAD_MORE_BLOGPOSTS_LIST, SET_BLOGPOSTS_LIST_CONFIG, SET_BLOGPOSTS_LIST_FILTER } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column, Text } from '../../ui';
import { BlogCard, SkelletonBlogCard } from '../../assets/components/blog';
import { BlogLatest } from '../../assets/components/blog';

import { filterData } from '../../assets/utils/filterFunction';

import {Select, FilterBarContainer} from '../../assets/components/filterBar';


class BlogList extends Component {
  componentDidMount() {
    if(this.props.blogPosts === null) {
      this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, this.props.config);
    }
  }

  filter = (value, type) => {
    let body = this.props.config.body;
    let parsedBody = JSON.parse(body);

    // takes 3 arguments [ the old search data ] [ the value of the changed field ] [ the type of the changed field ]
    const data = filterData(parsedBody, value, type);
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
    let newFilter = {
      type: type,
      value: value
    }

    this.props.determine(SET_BLOGPOSTS_LIST_CONFIG, newConfig)
    this.props.determine(SET_BLOGPOSTS_LIST_FILTER, newFilter)
    this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, newConfig);
  }

  renderBlogList = (data) => {
    // checks if the fetch call for user and blogpost is finished
    if(this.props.blogPosts !== null && this.props.user !== null) {
      return data.map((data, i) => {
        return(
          <Column key={i} md={6}>
            <BlogCard
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
          <Column md={6} key={i}>
            <SkelletonBlogCard elements={5} />
          </Column>
        )
      })
    }
    return null
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

      this.props.determine(SET_BLOGPOSTS_LIST_CONFIG, newConfig)
      this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, newConfig);
    }
  }

  render() {
    return (
      <>
        <Column s={12}>
          <FilterBarContainer filter={this.filter}>
            <div>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Kategorie</Text>
              <Select type="tags" options={this.props.filter.category.select} />
            </div>
            <div>
              <Text weight="600" size="small" style={{padding: '10px 0 10px 0', lineHeight: '1'}}>Autor</Text>
              <Select type="_by" options={this.props.filter.autor.select} />
            </div>
          </FilterBarContainer>
        </Column>

        <Column style={{padding: '0'}} md={8}>
          <Masonry>
            {this.renderBlogList(this.props.blogPosts)}
          </Masonry>
        </Column>

        <Column nop md={4}>
          <div style={{height: '100%', width: '100%', background: '#ebebeb'}}>
            <div style={{height: '500px', widht: '100%', background: 'grey', position: 'sticky', top: '100px'}}>

            </div>
          </div>
        </Column>

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
