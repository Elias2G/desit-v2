import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleFetch, determine } from '../../../redux/actions';
import { ACTIVE_VIEW_POST } from '../../../redux/actions/type';

import { ROOT_URL, GET_COLLECTION, masterkey } from '../../../config';

import { Container, Row, Button, Column, Title, Text, Image, Tag } from '../../../ui';
import { BlogListCard } from '../../../assets/components/blog';
import { HeaderHalf } from '../../../assets/components/header';

class SinglePost extends Component {
  componentDidMount() {
    let newConfig = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filter: { published: true, title_slug: this.props.match.params.id },
        limit: 1,
        skip: 0,
        populate: 1,
      })
    }
    if(this.props.post === null) {
      this.props.simpleFetch(ACTIVE_VIEW_POST, `${ROOT_URL + GET_COLLECTION}/blogposts?token=${masterkey}`, newConfig);
    }
  }

  renderTags = (data) => {
    return data.map((data, i) => {
      return data.toLowerCase() === 'technologie' ? <Tag key={i} bgColor="primaryDark" color="fontSecondary">{data}</Tag> :
      data.toLowerCase() === 'wissenswertes' ? <Tag key={i} bgColor="secondary" color="fontSecondary">{data}</Tag> : ''
    })
  }

  renderSinglePost = (passedData) => {
    if(this.props.post !== null) {
      let data = passedData.entries[0];
      console.log(data);
      return (
        <>
          <Title variant="h1" size="medium">{data.title}</Title>
          <Text size="small">{data._by}</Text>
          <Text size="small">
            {this.renderTags(data.tags)}
          </Text>
          <Container nop style={{margin: '50px 0'}} >
            <div className="singlePostStyle" dangerouslySetInnerHTML={{__html: data.content}} />
          </Container>
        </>
      );
    }
  }

  render() {
    return (
      <>
      <Container full big nop>
        <Image src="https://via.placeholder.com/1920x400" />
        <Container big>
          <Row>
            <Column md={9}>
                {this.renderSinglePost(this.props.post)}
            </Column>
            <Column md={3}>

            </Column>
          </Row>
        </Container>
      </Container>
      </>
    );
  }
}


const mapStateToProps = (data) => {
  return {
    post: data.blog.thisPost,
  }
}

export default connect(
  mapStateToProps,
  { simpleFetch }
)(SinglePost)
