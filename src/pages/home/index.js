import React, { Component } from 'react';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { Header } from '../../assets/components/header';

class LandingPage extends Component {
  render() {
    return (
      <Container full nop>
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

        <Row align="center" justify="center" style={{'minHeight': '80vh'}}>
          <Column s={12}>
            <BigTextBlock
              bgColor="primary"
              margin="auto"
              alignment="center"
              title="Wir sind designintime eine digitale Web Entwicklung &- Design Agentur"
              text="Wir sind ein gut aufgestelltes Team von Programmierern und Designern. Wir helfen Ihrem Unternehmen in der digitalen Welt Fuß zu fassen, Ihre Arbeitsabläufe zu automatisieren und optimieren und alles abgeschmückt mit einem innovativen Design das Sie einen Schritt vor Ihre Mitbewerber bringt."
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
      </Container>
    );
  }
}

export default LandingPage;
