import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';

import { breakPoints } from '../../../ui/components/settings'

import { Image, Row, Container, Column, Title } from '../../../ui';
import { Cancel } from '../../media/icons';

const LighboxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  max-height: 80vh;

  @media ${breakPoints.md} {
    height: 100%;
    width: auto;
  }
`;

const Close = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 200ms;
  :hover {
    transition: 200ms;
    transform: scale(1.3);
    path {
      transition: 200ms;
      fill: #20D1D1;
    }
  }
`;

export default class LightBox extends Component {
  setRightImages = (image) => {
    const windowWidth = window.innerWidth;
    for(let i = 0; i < image.styles.length; i++) {
      if(windowWidth <= 400 && image.styles[i].style === "mediumSmallPreview") {
        return image.styles[i].path;
      }
      if(windowWidth <= 1024 && image.styles[i].style === "mediumPreview") {
        return image.styles[i].path;
      }
      if(windowWidth > 1024 && image.styles[i].style === "largePreview") {
        return image.styles[i].path;
      }
    }
  }

  renderImages = (images) => {
    return images.map((data, i) => {
      return (
        <Container key={i} full style={{width: '100%', height: '100%'}}>
          <Row justify="center" align="center" style={{height: '100vh'}}>
            <Column md={9}>
              <div>
                <LighboxImage src={"http://127.0.0.1/cockpit-desit/" + this.setRightImages(data)} />
              </div>
            </Column>
            <Column md={2}>
              <Title>{data.meta.title}</Title>
              <Title>{data.meta.description}</Title>
            </Column>
          </Row>
        </Container>
      )
    })
  }

  render() {
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      initialSlide: this.props.goTo
    };

    return (
      <div style={{position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', background: 'rgba(255,255,255,0.95)', zIndex: '997'}}>
        <div style={{zIndex: '998', position: 'fixed', top: '100px', right: '30px'}} onClick={this.props.closeBox}>
          <Close>
            <Cancel />
          </Close>
        </div>
        <Slider {...settings}>
          {this.renderImages(this.props.images)}
        </Slider>
      </div>
    );
  }
}
