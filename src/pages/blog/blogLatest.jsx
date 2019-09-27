import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOSTS_LATEST, SET_BLOGPOSTS_LIST_CONFIG, FETCH_BLOGPOSTS_LIST } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { BlogLatestCard } from '../../assets/components/blog';

class BlogLatest extends Component {


  componentDidMount() {
    if(this.props.blogPostsLatest === null) {
      this.props.simpleFetch(FETCH_BLOGPOSTS_LATEST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, {
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

  renderBlogList = (data) => {
    if(this.props.blogPostsLatest !== null) {
      console.log(data);
      return data.map((data, i) => {
        return(
          <Column nop s={12} ml={4}>
            <BlogLatestCard
              key={i}
              data={data}
            />
          </Column>
        )
      })
    }
    return null
  }


  render() {
    return (
      <>
        {this.renderBlogList(this.props.blogPostsLatest)}
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    blogPosts: data.blog.blogList,
    blogPostsLatest: data.blog.latest,
    config: data.blog.loadFromBlogList
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogLatest)
