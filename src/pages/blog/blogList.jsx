import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../redux/actions';
import { FETCH_BLOGPOSTS_LIST, LOAD_MORE_BLOGPOSTS_LIST, SET_BLOGPOSTS_LIST_CONFIG } from '../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../config';

import { Container, Row, Button, Column } from '../../ui';
import { BlogListCard } from '../../assets/components/blog';

class BlogList extends Component {


  componentDidMount() {
    if(this.props.blogPosts === null) {
      this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, this.props.config);
    }
  }

  renderBlogList = (data) => {
    if(this.props.blogPosts !== null) {
      console.log(data);
      return data.map((data, i) => {
        return(
          <BlogListCard
            key={i}
            data={data}
          />
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
          filter: { published: true },
          limit: parsedBody.limit + 10,
          skip: 0,
          populate: 1,
        })
      }

      this.props.determine(SET_BLOGPOSTS_LIST_CONFIG, newConfig)
      this.props.simpleFetch(FETCH_BLOGPOSTS_LIST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, newConfig);
    }

  }

  render() {
    return (
      <>
        <Column nop md={9}>
          {this.renderBlogList(this.props.blogPosts)}
        </Column>
        <Column nop md={3}>
          <div>smth</div>
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
    config: data.blog.loadFromBlogList
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch, determine }
)(BlogList)
