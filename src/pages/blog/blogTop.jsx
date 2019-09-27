import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOST_TOP, SET_BLOGPOSTS_LIST_CONFIG, FETCH_BLOGPOSTS_LIST } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { BlogTopCard } from '../../assets/components/blog';

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
    if(this.props.topPost !== null) {
      console.log(data);
      return data.map((data, i) => {
        return(
          <Column nop s={12}>
            <BlogTopCard
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
        {this.renderBlogList(this.props.topPost)}
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    topPost: data.blog.topPost,
    config: data.blog.loadFromBlogList
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogTop)
