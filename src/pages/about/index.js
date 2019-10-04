import React, { Component } from 'react';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image, SubTitle, Divider } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { CallToAction } from '../../assets/components/callToAction';
import { Header } from '../../assets/components/header';


class About extends Component {
  componentDidMount() {
    setTimeout(() => {
      if(this.props.history.action === "PUSH") {
        window.scrollTo({top: 0})
      }
    },300);
  }
  render() {
    return (
      <Container full nop style={{background: 'white'}}>
        <Header>
          <Row>
            <Column s={12}>
              <Title variant="h1" size="large" color="fontSecondary">
                Design & Technologie <br /> die Verändert
              </Title>
              <Text size="small" color="fontSecondary" style={{'marginTop': '50px'}}>
                The expert Team at Brightscout specializes in building innovative technology solutions
              </Text>
              <Container nop full>
                <Button shadow="medium" toUppercase style={{'marginTop': '50px'}} variant="primary">jetzt durchstarten</Button>
              </Container>
            </Column>
          </Row>
        </Header>

        <Container middleBig>
          <Row align="center" justify="center" style={{'minHeight': '60vh'}}>
            <Column s={12}>
              <Title variant="h6" size="medium" style={{paddingBottom: '45px'}}>
                We believe innovative technology can transform businesses when it’s implemented thoughtfully and accessible by like-minded communities. Unfortunately, often times applications are built with barriers that shield innovation from the tools and people who need them.
              </Title>
              <Text size="small">
                Founded in 2017 with an Austin, Texas headquarters, Brightscout now serves a number of the top brands and startups around the globe. Our growing team of experts spans 24 time zones – from San Francisco to London, Belgrade to Bangladesh and more.
              </Text>
              <Text size="small">
                Each person at Brightscout brings their own unique perspective and personality to the team and we value that – whether it’s an obsession for good coffee, love of memes, excitement for astrophysics, passion for travel, the quest for exceptional food or something else.
              </Text>
            </Column>
          </Row>
        </Container>

        <Container big style={{marginBottom: '50px'}}>
          <Image r="8px" src="https://via.placeholder.com/1600x400" />
        </Container>

        <Container big nop>
          <Row style={{marginBottom: '50px'}}>
            <Column s={12}>
              <SubTitle toUppercase align="center" size="small" color="primary">
                Unsere Arbeitsbereiche
              </SubTitle>
              <Container nop>
                <Line bgColor="primary" />
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">lorem ipsum dolor</Text>
                <Text size="small">
                  Our design team is built with specialization in mind. Each team works together to execute at a high-level with velocity.
                </Text>
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">lorem ipsum dolor</Text>
                <Text size="small">
                  Our design team is built with specialization in mind. Each team works together to execute at a high-level with velocity.
                </Text>
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">lorem ipsum dolor</Text>
                <Text size="small">
                  Our design team is built with specialization in mind. Each team works together to execute at a high-level with velocity.
                </Text>
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">lorem ipsum dolor</Text>
                <Text size="small">
                  Our design team is built with specialization in mind. Each team works together to execute at a high-level with velocity.
                </Text>
              </Container>
            </Column>
          </Row>
        </Container>

        <Container big nop>
          <Row style={{marginTop: '50px 0px', padding: '25px 0'}} justify="space-between">
            <Column md={5} style={{padding: '0'}}>
              <Container>
                <SubTitle align="center" size="small" toUppercase color="primary">der anfang</SubTitle>
                <Title align="center" variant="h6" size="medium" >Starte von unten</Title>
                <Text align="center" size="small">Jede große Firma hat einmal klein begonnen, lass uns die Zukunft gemeinsam bauen</Text>
                <Image style={{marginTop: '50px'}} src="https://via.placeholder.com/500x200" r="8px" />
              </Container>
            </Column>
            <Column style={{minHeight: '100%', width: '1px', background: '#ebebeb', display: 'block', padding: '0'}}></Column>
            <Column md={5} style={{padding: '0'}}>
              <Container>
                <SubTitle align="center" size="small" toUppercase color="primary">der anfang</SubTitle>
                <Title align="center" variant="h6" size="medium" >Starte von unten</Title>
                <Text align="center" size="small">Jede große Firma hat einmal klein begonnen, lass uns die Zukunft gemeinsam bauen</Text>
                <Image style={{marginTop: '50px'}} src="https://via.placeholder.com/500x200" r="8px" />
              </Container>
            </Column>
          </Row>
        </Container>

        <Row align="center" justify="center">
          <Column s={12}>
            <BigTextBlock
              bgColor="primary"
              margin="auto"
              alignment="center"
              title="Ein kleines Team aus leidenschaftlichen Designern und Programmierern"
              text="Led by enterprise software veterans, our team is comprised of trustworthy experts across a range of disciplines including project management, design, systems and network administration, security, devops, and development with experience on some of the most complex and interesting tech verticals."
             />
          </Column>
        </Row>

        <Container big nop>
          <Row>
            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Dominik Wenghofer</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">App / Web Entwicklung</Text>
                <Text size="small">
                  Our design team is built with specialization in mind.
                </Text>
              </Container>
            </Column>
            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Elias Wuggenig</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">App / Web Entwicklung</Text>
                <Text size="small">
                  Our design team is built with specialization in mind.
                </Text>
              </Container>
            </Column>

            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Carolin Lechner</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">Illustration & Design</Text>
                <Text size="small">
                  Our design team is built with specialization in mind.
                </Text>
              </Container>
            </Column>

            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Sandra Bacher Schönfelder</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">Konzept & Design</Text>
                <Text size="small">
                  Our design team is built with specialization in mind.
                </Text>
              </Container>
            </Column>
          </Row>
        </Container>

        <Container big>
          <CallToAction>
            <Title variant="h6" size="medium">
              Sie suchen Helfer? Wir sind gerne bereit bei Projekten mitzuhelfen.
            </Title>
          </CallToAction>
        </Container>



      </Container>
    );
  }
}

export default About;
