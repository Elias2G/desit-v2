import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOST_TOP, SET_BLOGPOSTS_LIST_CONFIG, FETCH_BLOGPOSTS_LIST } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { BlogCard, SkelletonBlogCard } from '../../assets/components/blog';

class BlogTop extends Component {

  componentDidMount() {
    if(this.props.topPost === null) {
      this.props.simpleFetch(FETCH_BLOGPOST_TOP, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filter: { published: true },
          limit: 1,
          skip: 0,
          populate: 1, // resolve linked collection items
        })
      });
    }
  }

  renderBlogList = (data) => {
    if(this.props.topPost !== null && this.props.user !== null) {
      return data.map((data, i) => {
        return(
          <Column key={i} nop s={12}>
            <BlogCard
              user={this.props.user}
              data={data}
            />
          </Column>
        )
      })
    } else {
      let elements = [1];
      return elements.map((data, i) => {
        return(
          <SkelletonBlogCard key={i} elements={1} />
        )
      })
    }
    return null
  }


  render() {
    return (
      <>
        {this.renderBlogList(this.props.topPost)}
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    topPost: data.blog.topPost,
    config: data.blog.loadFromBlogList,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogTop)
