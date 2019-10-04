import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Row, Column, Text, Image, Box, Title, Divider, Button } from '../../ui';


class Footer extends Component {
  render() {
    return (
      <Container full nop style={{marginTop: '50px'}}>
        <Box height="100%" gradient>
          <Container big style={{paddingTop: '10%'}}>
            <Row style={{height: '100%'}}>
              <Column s={12} md={8}>
                <Title weight="300" size="large" variant="h1" color="fontSecondary">
                  Erfahre wie designintime <br />
                  dein Business <br />
                  verändern kann
                </Title>
                <Text size="medium" color="fontSecondary" weight="300" style={{marginTop: '50px', opacity: '0.8'}}>
                  Do you need an elite team of technologist and idea-makers? Is quality important to you? Is scalability and endless customization paramount? Do you need a brand that is built specifically for your company and can be as innovative as you are?
                </Text>
                <Text size="medium" color="fontSecondary" weight="300" style={{opacity: '0.8'}}>
                  Tell us a little about your needs and a Brightscout business analyst will get in touch.
                </Text>
                <Title style={{marginTop: '50px'}} color="fontSecondary" variant="h4" size="medium"><span style={{fontWeight: '700'}}>
                  Sag Hallo!</span> office@designintime.at
                </Title>
              </Column>
              <Column md={4}>
                <Container style={{marginTop: '50px'}}>
                  <Button toUppercase variant="secondary">jetzt durchstarten</Button>
                </Container>
              </Column>
            </Row>
            <Divider style={{marginTop: '5%', opacity: '0.6'}} />
          </Container>
          <Container big style={{marginTop: '50px', paddingBottom: '50px'}}>
            <Row>
              <Column md={3}>
                <Text size="big" color="fontSecondary">designintime</Text>
                <Text size="small" color="fontSecondary" weight="700" style={{paddingBottom: '0'}}>
                  design in time werbeagentur e.U.
                </Text>
                <Text size="small" color="fontSecondary" style={{paddingTop: '0'}}>
                  Burgstraße 9, 9330 Alfthofen
                </Text>
                <Text size="small" color="fontSecondary">
                  04262 / 27 296
                </Text>
                <Text size="small" color="fontSecondary">
                  office[at]designintime.at
                </Text>
              </Column>

              <Column md={3}>
                <Title variant="h6" size="medium" color="fontSecondary">Firmen Infos</Title>
                <NavLink to="/ueber-uns" >
                  <Text size="small" color="fontSecondary">Über uns</Text>
                </NavLink>
                <NavLink to="/blog" >
                  <Text size="small" color="fontSecondary">Blog</Text>
                </NavLink>
                <NavLink to="/portfolio" >
                  <Text size="small" color="fontSecondary">Portfolio</Text>
                </NavLink>
                <NavLink to="/kontakt" >
                  <Text size="small" color="fontSecondary">Kontakt</Text>
                </NavLink>
              </Column>

              <Column md={3}>
                <Title variant="h6" size="medium" color="fontSecondary">Spezialitäten</Title>
                <NavLink to="/ueber-uns" >
                  <Text size="small" color="fontSecondary">Corporate Design</Text>
                </NavLink>
                <NavLink to="/blog" >
                  <Text size="small" color="fontSecondary">Illustrationen</Text>
                </NavLink>
                <NavLink to="/portfolio" >
                  <Text size="small" color="fontSecondary">Web und App Entwicklung</Text>
                </NavLink>
                <NavLink to="/kontakt" >
                  <Text size="small" color="fontSecondary">Automatisierungen</Text>
                </NavLink>
              </Column>

              <Column md={3}>
                <Title variant="h6" size="medium" color="fontSecondary">Technologien</Title>
                <NavLink to="/ueber-uns" >
                  <Text size="small" color="fontSecondary">React.js</Text>
                </NavLink>
                <NavLink to="/blog" >
                  <Text size="small" color="fontSecondary">Progressive Web Apps</Text>
                </NavLink>
                <NavLink to="/portfolio" >
                  <Text size="small" color="fontSecondary">lorem</Text>
                </NavLink>
                <NavLink to="/kontakt" >
                  <Text size="small" color="fontSecondary">lorem</Text>
                </NavLink>
              </Column>
            </Row>
          </Container>
        </Box>
        <Container full nop bgColor="primaryDark">
          <Container big>
            <Row>
              <Column md={4}>
                <Row justify="space-between">
                  <Text style={{position: 'relative', display: 'block', width: 'auto'}} size="small" color="fontSecondary">Feedback</Text>
                  <Text style={{position: 'relative', display: 'block', width: 'auto'}} size="small" color="fontSecondary">Datenschutz</Text>
                  <Text style={{position: 'relative', display: 'block', width: 'auto'}} size="small" color="fontSecondary">Impressum</Text>
                </Row>
              </Column>
              <Column md={4}>
                <Row justify="center">
                  <Text size="small" color="fontSecondary">Made with ♥ in Austria</Text>
                </Row>
              </Column>
              <Column md={4}>
                <Row justify="flex-end">
                  sozial icons
                </Row>
              </Column>
            </Row>
          </Container>

        </Container>
      </Container>
    );
  }
}

export default Footer;
