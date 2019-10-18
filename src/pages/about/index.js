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
                Wir unterstützen Unternehmen bei der Entwicklung hochwertiger Produkte.
              </Title>
              <Text size="medium" color="fontSecondary" style={{'marginTop': '50px'}}>
                Wir sind mehr als eine Werbeagentur. Wir sind ein eingespieltes Team von Designern und Programmierern.
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
                Wir glauben, dass innovative Technologie Unternehmen verändern kann, wenn sie sorgfältig implementiert und für die Zielgruppen optimiert ist. Leider werden häufig Anwendungen entwickelt die der heutigen Zeit nicht entsprechen.
              </Title>
              <Text size="small">
                Designintime wurde 2011 in Kärnten gegründet und bedient eine Reihe von Unternehmen in Kärnten und der Steiermark.
                Zuvor war designintime in Deutschland und die Chefin brachte Ihre Erfahrung mit nach Kärnten.
              </Text>
              <Text size="small">
                Jeder Mitarbeiter bei designintime bringt seine eigene einzigartige Persöhnlichkeit und Perspektive in das Team mit ein. Sei es eine Besessenheit für guten Kaffee, liebe zu memes, die Leidenschaft zu reisen oder einfach den Spaß an der Arbeit.
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
                Spezialgebiete
              </SubTitle>
              <Container nop>
                <Line bgColor="primary" />
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">Multidisziplines Design</Text>
                <Text size="small">
                  Unser Designteam ist spezialisiert. Jedes Team arbeitet zusammen, um mit hoher Geschwindigkeit auf hohem Niveau zu arbeiten.
                </Text>
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">Produkt Management</Text>
                <Text size="small">
                  Brillantes Design kann nur zu viel, unsere Produktmanager, verwalten den Design-Erstellungsprozess und können alle komplexen Hindernisse überwinden.
                </Text>
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">Maschienenbau</Text>
                <Text size="small">
                  Unser Engineering-Team ist darauf ausgelegt, Probleme zu lösen. Wir sind stolz darauf, die Erbauer und Installateure zu sein, bei denen andere oft versagen.
                </Text>
              </Container>
            </Column>
            <Column md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px" />
                <Text size="small" weight="700">Geschäftsstrategie</Text>
                <Text size="small">
                  Die Strategie- und Betriebsarchitektur kann für jedes Unternehmen entwickelt werden, sodass Sie ohne Sodbrennen sofort mit der Ausführung beginnen können.
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
                <Text align="center" size="small">Alle großen Unternehmen haben irgendwo angefangen. Lassen Sie uns gemeinsam die Zukunft gestalten.</Text>
                <Image style={{marginTop: '50px'}} src="https://via.placeholder.com/500x200" r="8px" />
              </Container>
            </Column>
            <Column style={{minHeight: '100%', width: '1px', background: '#ebebeb', display: 'block', padding: '0'}}></Column>
            <Column md={5} style={{padding: '0'}}>
              <Container>
                <SubTitle align="center" size="small" toUppercase color="primary">der anfang</SubTitle>
                <Title align="center" variant="h6" size="medium" >Es auf die nächste Stufe bringen.</Title>
                <Text align="center" size="small">Unterstützung für etablierte Unternehmen beim Aufbau ihrer nächsten großen Sache oder Erleichterung.</Text>
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
              text="Unter der Leitung von erfahrenen Unternehmenssoftware-Experten besteht unser Team aus vertrauenswürdigen Experten aus einer Reihe von Disziplinen, darunter Projektmanagement, Design, System- und Netzwerkadministration, Sicherheit, Entwicklung und Entwicklung mit Erfahrung in einigen der komplexesten und interessantesten technischen Branchen."
             />
          </Column>
        </Row>

        <Container big nop>
          <Row>
            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Carolin Lechner</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">Illustration & Design</Text>
                <Text size="small">
                  Leidenschaftliche/r Baggerfahrer/in seit 24 Jahren such "echten" Mann.
                </Text>
              </Container>
            </Column>

            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Elias Wuggenig</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">App / Web Entwicklung</Text>
                <Text size="small">
                  Hallo, ich bin Elias und trinke gerne in der Arbeit.
                </Text>
              </Container>
            </Column>

            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Dominik Wenghofer</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">App / Web Entwicklung</Text>
                <Text size="small">
                  Wettkampftauglicher Sportsitzer vorm PC seit 4 Jahren and den Stuhl gefesselt.
                </Text>
              </Container>
            </Column>

            <Column s={6} md={3} style={{padding: '0'}}>
              <Container>
                <Image src="https://via.placeholder.com/400" r="8px"/>
                <Text style={{paddingBottom: '0'}} size="small" weight="700">Sandra Bacher Schönfelder</Text>
                <Text style={{paddingTop: '0'}} size="small" weight="400" color="primaryDark">Konzept & Design</Text>
                <Text size="small">
                  Ohne meine Leute hätte ich nicht nur weniger Spaß, sondern könnte auch nur einen Bruchteil der Leistung anbieten.
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
