import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../redux/actions';
import { ACTIVE_VIEW_POST_RECOMMENDED } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { BlogCard, SkelletonBlogCard } from '../../assets/components/blog';

import { filterData } from '../../assets/utils/filterFunction';

class BlogRecommended extends Component {
  componentDidMount() {
    const { tags } = this.props.activeViewPostData.entries[0];

    let newConfig = {
      tags: { $has: tags[0] }
    }

    this.props.simpleFetch(ACTIVE_VIEW_POST_RECOMMENDED, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filter: { published: true, tags: newConfig.tags },
        limit: 3,
        skip: 0,
        populate: 1, // resolve linked collection items
        sort: {_created: -1}
      })
    });
  }

  renderBlogList = (data) => {
    if(this.props.thisPostRecommended !== null && this.props.user !== null) {
      return data.map((data, i) => (
        <Column key={i} nop s={12} ml={4}>
          <BlogCard
            user={this.props.user}
            data={data}
          />
        </Column>
      ))
    } else {
      let elements = [1,2,3];
      return elements.map((data, i) => (
        <Column key={i} nop s={12} ml={4}>
          <SkelletonBlogCard elements={3} />
        </Column>
      ))
    }
  }

  render() {
    return this.renderBlogList(this.props.thisPostRecommended);
  }
}

const mapStateToProps = (data) => {
  return {
    blogPosts: data.blog.blogList,
    thisPostRecommended: data.blog.thisPostRecommended,
    config: data.blog.loadFromBlogList,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogRecommended)
