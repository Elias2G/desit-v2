import React, { Component } from 'react';
import LightBox from './lightboxView';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';

import { Row, Column, Container, Image } from '../../../ui';

const PreviewImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: 200ms;
  :hover {
    transition: 200ms;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
`;

export default class Gallery extends Component {
  state = {
    open: false,
    position: 0
  }

  openLightBox = (e, i) => {
    this.setState({open: true, position: i});
  }

  closeLightBox = () => {
    this.setState({open: false, position: 0});
  }

  setRightImages = (image) => {
    const windowWidth = window.innerWidth;
    for(let i = 0; i < image.styles.length; i++) {
      if(windowWidth <= 1024 && image.styles[i].style === "smallPreview") {
        return image.styles[i].path;
      }
      if(windowWidth > 1024 && image.styles[i].style === "mediumSmallPreview") {
        return image.styles[i].path;
      }
    }
  }

  renderGalleryItems = (images) => {
    console.log(images);
    return images.entries[0].gallery.map((data, i) => {
      return (
        <Column key={i} s={6} md={3}>
          <PreviewImage r="8px" src={"http://127.0.0.1/cockpit-desit/" + this.setRightImages(data) } onClick={(e) => this.openLightBox(e, i)} />
        </Column>
      )
    })
  }

  render() {
    return (
      <Container full nop>
        {
          this.props.images !== null
          ? <Masonry>{this.renderGalleryItems(this.props.images)}</Masonry>
          : <div>image</div>
        }
        {this.state.open && <LightBox goTo={this.state.position} closeBox={this.closeLightBox} images={this.props.images.entries[0].gallery} />}
      </Container>
    );
  }
}
