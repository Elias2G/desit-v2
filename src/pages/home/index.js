import React, { Component } from 'react';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image, SubTitle, Divider } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { Header } from '../../assets/components/header';

import BlogLatest from '../blog/blogLatest';

class LandingPage extends Component {
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
                Design & Technologie <br /> die Verändert
              </Title>
              <Text size="medium" color="fontSecondary" style={{'marginTop': '50px', maxWidth: '600px'}}>
                Aufbau hochmoderner SaaS-Markenerlebnisse, die das Geschäft transformieren und die Innovationsgeschwindigkeit beschleunigen.
              </Text>
              <Container nop full>
                <Button shadow="medium" toUppercase style={{'marginTop': '50px'}} variant="primary">jetzt durchstarten</Button>
              </Container>
            </Column>
          </Row>
        </Header>

        <Row align="center" justify="center" style={{'minHeight': '80vh'}}>
          <Column s={12}>
            <BigTextBlock
              bgColor="primary"
              margin="auto"
              alignment="center"
              title="Wir sind designintime eine digitale Web Entwicklung &- Design Agentur"
              text="Das Expertenteam von Brightscout ist auf die Entwicklung innovativer Technologielösungen für Unternehmen spezialisiert. Unsere Produkte und Dienstleistungen setzen neue Maßstäbe in Bezug auf Produktivität, verbessern die Zusammenarbeit zwischen Teammitgliedern und optimieren die Kommunikation in großem Maßstab. Wir verwenden eine leistungsstarke Mischung aus exquisitem Design und innovativer Technologie, um die Probleme zu lösen, die viele Unternehmen heute beschäftigen."
             />
          </Column>
        </Row>

         <ImageBlock
           subtitle="Wie nähere ich mich dem Problem"
           title="Die Idee & Konzeption"
           bgColor="primary"
           margin="0"
           text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
         />
         <ImageBlock
           right
           subtitle="modernes und zeitloses design"
           title="Grafik & Design"
           bgColor="primary"
           margin="0"
           text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
         />
         <ImageBlock
           subtitle="innovative und neue technologien"
           title="App / - Web Entwicklung"
           bgColor="primary"
           margin="0"
           text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
         />

         <MediumTextBlock
           align="center"
           subtitle="Beschleunige Business wachstum"
           text="Wir arbeiten mit Kunden zusammen, um erfolgreiche digitale Geschäfte, Produkte und Erlebnisse zu schaffen, indem wir Ihren Kunden zuhören."
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
                 title="Zweckmäßig schönes Design"
                 text="Die Menschen erwarten und reagieren heute mehr denn je auf schöne digitale Erlebnisse. Schönheit und Freude sind Kern unserer Strategie und zielgerichtet in unserer Produktdesignpraxis."
               />
             </Column>
             <Column s={12} md={4}>
               <LittleTextBlock
                 title="Mit innovativer Technologie gebaut"
                 text="Wir lassen Innovationen durch Design vorantreiben. Die Kompetenz und das Vertrauen unseres Technologieteams befähigen unsere Designer, die Bedürfnisse und Wünsche der Menschen wirklich in den Vordergrund zu stellen."
               />
             </Column>
             <Column s={12} md={4}>
               <LittleTextBlock
                 title="Informiert durch umfassende Strategie"
                 text="Der ultimative Erfolg eines Produkts hängt von den Menschen ab, die von den Ergebnissen betroffen sind. Aus diesem Grund steht bei unserem Ansatz der Mensch an erster Stelle, wenn Entscheidungen getroffen, Systeme entworfen und gebaut werden."
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

      </Container>
      </>
    );
  }
}

export default LandingPage;
