import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOSTS_LATEST, SET_BLOGPOSTS_LIST_CONFIG, FETCH_BLOGPOSTS_LIST } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { BlogCard, SkelletonBlogCard, BlogCardSlider } from '../../assets/components/blog';

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

  renderBlogListSlider = (data) => {
    if(this.props.blogPostsLatest !== null && this.props.user !== null) {
      return data.map((data, i) => (
        <BlogCardSlider
          key={data._id}
          user={this.props.user}
          data={data}
        />
      ))
    } else {
      let elements = [1,2,3];
      return elements.map((data, i) => (
        <Column key={42 + elements[i] * 3} nop s={2} ml={4}>
          <SkelletonBlogCard />
        </Column>
      ))
    }
  }

  renderBlogList = (data) => {
    if(this.props.blogPostsLatest !== null && this.props.user !== null) {
      return data.map((data, i) => (
        <Column md={4} key={data._id}>
          <BlogCard
            user={this.props.user}
            data={data}
          />
        </Column>
      ))
    } else {
      let elements = [1,2,3];
      return elements.map((data, i) => (
        <Column key={12 + elements[i] * 3} nop s={2} ml={4}>
          <SkelletonBlogCard />
        </Column>
      ))
    }
  }


  render() {
    const settings ={
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      swipeToSlide: true,
      arrows: false,
    };
    return (
      <>
      {
        window.innerWidth > 768
        ? <Row>{this.renderBlogList(this.props.blogPostsLatest)}</Row>
        : <Slider {...settings}>
            {this.renderBlogListSlider(this.props.blogPostsLatest)}
          </Slider>
      }
      </>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    blogPosts: data.blog.blogList,
    blogPostsLatest: data.blog.latest,
    config: data.blog.loadFromBlogList,
    user: data.user
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogLatest)
