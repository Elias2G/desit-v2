import React, { Component } from 'react';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image, SubTitle, Divider } from '../../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock, WeSpecialize } from '../../../assets/components/textblocks';
import { Header } from '../../../assets/components/header';
import { CallToAction } from '../../../assets/components/callToAction';

import BlogLatest from '../../blog/blogLatest';

class ThemaReact extends Component {
  componentDidMount() {
    setTimeout(() => {
      if(this.props.history.action === "PUSH") {
        window.scrollTo({top: 0})
      }
    },300);
  }
  render() {
    return (
      <>
      <Container full nop style={{background: 'white'}}>
        <Header>
          <Row>
            <Column s={12}>
              <Title variant="h1" size="large" color="fontSecondary">
                React.js Entwicklung
              </Title>
              <Text size="medium" color="fontSecondary" style={{'marginTop': '50px', maxWidth: '750px'}}>
                Müssen Sie eine einfache Web- oder mobile App erstellen, die eine schnelle, ansprechende und native Benutzererfahrung bietet? Wie stellen Sie sicher, dass Ihre App schnell erstellt, einfach getestet und so konstruiert werden kann, dass sie in mehreren Betriebsumgebungen gleichermaßen funktioniert? Für Facebook war die Antwort die Erstellung von React.js.
              </Text>
              <Container nop full>
                <Button shadow="medium" toUppercase style={{'marginTop': '50px'}} variant="primary">jetzt durchstarten</Button>
              </Container>
            </Column>
          </Row>
        </Header>

        <Container big>
          <Row align="center" justify="center" style={{'minHeight': '80vh'}}>
            <Column s={12}>
              <Container full nop>
                <SubTitle style={{marginBottom: '0'}} align="center" color="primary" size="small" >HOW TO APPROACH THE PROBLEM</SubTitle>
                <Title variant="h2" size="large" align="center">Schnelles, Zuverlässiges Design und Software für Ihre Firma</Title>
                <Line bgColor="primary"  />
                <Text size="small" align="center">
                  React.js kann am besten als JavaScript-Bibliothekslösung beschrieben werden, anstatt als System mit vollem Funktionsumfang. Es wurde von Facebook entwickelt, um komplexere UI-Systeme (User Interface) in kleinere, einfachere Teile zu zerlegen. Diese kleineren Teile werden dank Funktionen wie JSX, einer Syntax, mit der Programmierer ihre Programme entweder in reinem JavaScript oder in einer Mischung aus JavaScript, HTML und CSS schreiben können, schnell gerendert.
                </Text>
              </Container>
            </Column>
          </Row>
        </Container>

        <Container big nop>
          <Row style={{marginBottom: '50px'}}>
            <Column s={12}>
              <Title variant="h3" size="medium" align="center">
                Warum designintime für React.js Entwicklung
              </Title>
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


        <ImageBlock
          subtitle="einfachheit"
          title="Kleine Komponenten große Leistung"
          bgColor="primary"
          margin="0"
          text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
        />

        <MediumTextBlock
          align="center"
          subtitle="How thinks work"
          text="The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity"
        />
        <Container big>
          <Row>
            <Column s={12}>
              <Image r="8px" src="https://via.placeholder.com/1600x250" />
            </Column>
          </Row>
        </Container>
        <Container big>
          <Row>
            <Column s={12} md={4}>
              <LittleTextBlock
                title="lorem ipsum dolor"
                text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
              />
            </Column>
            <Column s={12} md={4}>
              <LittleTextBlock
                title="lorem ipsum dolor"
                text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
              />
            </Column>
            <Column s={12} md={4}>
              <LittleTextBlock
                title="lorem ipsum dolor"
                text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
              />
            </Column>
          </Row>
        </Container>

        <Container big>
          <Row>
            <Column s={12}>
              <SubTitle color="primary" size="small" >NEU</SubTitle>
              <Title variant="h4" size="medium">Unsere letzten Beiträge</Title>
            </Column>
          </Row>

          <BlogLatest />

          <Row justify="center" style={{marginBottom: '50px'}}>
            <Button size="small" shadow="medium" toUppercase variant="gradient" withGradient="secondary">alle Beiträge ansehen</Button>
          </Row>
        </Container>

        <WeSpecialize subtitle="Industries" align="center" text="Wir Spezialisieren uns in...">
          Building highly polosjed product in growing industires like yours
        </WeSpecialize>

        <Container big>
          <CallToAction>
            <Title variant="h6" size="medium">
              Seien Sie immer am neusten Stand <br /> mit unserem Blog!
            </Title>
          </CallToAction>
        </Container>


      </Container>
      </>
    );
  }
}

export default ThemaReact;
