import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Container, Title, Line, Text, Button, Row, Column, Image, SubTitle, Divider } from '../../ui';

import { BigTextBlock, ImageBlock, MediumTextBlock, LittleTextBlock } from '../../assets/components/textblocks';
import { Header } from '../../assets/components/header';

import BlogLatest from '../blog/blogLatest';

class Services extends Component {
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
              <Text size="small" color="fontSecondary" style={{'marginTop': '50px'}}>
                The expert Team at Brightscout specializes in building innovative technology solutions
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
              </Container>
            </Column>

            <Column md={4}>
              <Row justify="center" align="center">
                <div>
                  <Image style={{width: '150px', height: '150px'}} src="https://via.placeholder.com/150" />
                  <Text size="small" align="center" weight="600">
                    Konzeption
                  </Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink>Design Forschung</NavLink></Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink>Markt Forschung</NavLink></Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink>User Forschung</NavLink></Text>
                </div>
              </Row>
            </Column>
            <Column md={4}>
              <Row justify="center" align="center">
                <div>
                  <Image style={{width: '150px', height: '150px'}} src="https://via.placeholder.com/150" />
                  <Text size="small" align="center" weight="600">
                    Design
                  </Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink to="/leistungen/corporate-design">Corporate Design & Branding</NavLink></Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink to="/leistungen/illustrationen">Illustrationen</NavLink></Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink>Lorem ipsum</NavLink></Text>
                </div>
              </Row>
            </Column>
            <Column md={4}>
              <Row justify="center" align="center">
                <div>
                  <Image style={{width: '150px', height: '150px'}} src="https://via.placeholder.com/150" />
                  <Text size="small" align="center" weight="600">
                    Programmierung
                  </Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink to="/leistungen/web-entwicklung">Web Entwicklung</NavLink></Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink>Mobile Entwicklung</NavLink></Text>
                  <Text style={{padding: '0'}} size="small" align="center"><NavLink>Schnittstellen</NavLink></Text>
                </div>
              </Row>
            </Column>


          </Row>
        </Container>


         <ImageBlock
           title="Entdecken"
           bgColor="primary"
           margin="0"
           text="Führende Unternehmen entwickeln sich zu schlanken, technisch versierten, optimierten Abläufen, anspruchsvollen Arbeitsprozessen, die besser, stärker und schneller sind. Um wettbewerbsfähig zu bleiben, ist es an der Zeit, technologische Lösungen und Produkte zu identifizieren, die Ihre Produktivität und Ihren Wert steigern können."
         >
          <Text size="medium" weight="600"><span>+</span> Geschäftsstrategie</Text>
          <Text size="small" style={{paddingTop: '0'}}>
            Machen Sie mit einer intelligenten, forschungsorientierten Strategie Schluss mit Markenstrategie und Kundenakquise.
          </Text>
          <Text size="medium" weight="600"><span>+</span> Geschäftsbetrieb</Text>
          <Text size="small" style={{paddingTop: '0'}}>
            Der Aufbau eines großartigen Produkts ist erst der Anfang. Wir helfen Ihnen beim Aufbau eines Geschäftsbetriebs, der Ihre Kunden begeistert.
          </Text>
         </ImageBlock>

         <ImageBlock
           right
           title="Bauen"
           bgColor="primary"
           margin="0"
           text="Bauen Sie nicht irgendein Produkt, bauen Sie das richtige Produkt und übertreffen Sie die Kundenerwartungen, indem Sie die Benutzer mit Schönheit, Eleganz und Funktion begeistern."
         >
          <Text size="medium" weight="600"><span>+</span> Multidisziplinares Design</Text>
          <Text size="small" style={{paddingTop: '0'}}>
            Bringen Sie ein Team spezialisierter Designer zusammen, um die Leistung eines einzelnen Designers zu übertreffen.
          </Text>
          <Text size="medium" weight="600"><span>+</span> App Entwicklung</Text>
          <Text size="small" style={{paddingTop: '0'}}>
            Sie haben die Strategie, Sie haben die Marke, Sie haben den Produktprototyp. Lassen Sie uns bauen, was als nächstes kommt.
          </Text>
         </ImageBlock>

         <ImageBlock
           title="Überwachen"
           bgColor="primary"
           margin="0"
           text="Schnelleres Testen und Validieren von Hypothesen bedeutet weniger Zeit für das, was nicht funktioniert, und mehr Zeit, um herauszufinden und zu wiederholen, was funktioniert."
         >
           <Text size="medium" weight="600"><span>+</span> Intelligente Analyse</Text>
           <Text size="small" style={{paddingTop: '0'}}>
             Verfolgen Sie jedes wichtige Ereignis anhand detaillierter Benutzerprofile und beschleunigen Sie die Innovationsgeschwindigkeit.
           </Text>
           <Text size="medium" weight="600"><span>+</span> Marketing Automatisierung</Text>
           <Text size="small" style={{paddingTop: '0'}}>
             Erstellen Sie pflegende Content- und Content-Marketing-Strategien über zahlreiche Kundenkontaktpunkte hinweg.
           </Text>
         </ImageBlock>

         <ImageBlock
           right
           title="Wachsen"
           bgColor="primary"
           margin="0"
           text="Hier treffen Marketing und Technologie aufeinander, um innovative Wege zu finden, wie Ihre Kunden Ihr Produkt und ihre Erfahrungen mit ihren persönlichen Netzwerken teilen können."
         >
           <Text size="medium" weight="600"><span>+</span> Mund zu Mund</Text>
           <Text size="small" style={{paddingTop: '0'}}>
             Implementieren Sie technologische Lösungen, um ein Empfehlungsnetzwerk von Partnern und Produktevangelisten aufzubauen.
           </Text>
           <Text size="medium" weight="600"><span>+</span> Viral Loops</Text>
           <Text size="small" style={{paddingTop: '0'}}>
             Lassen Sie Ihr Produkt sich selbst vermarkten, indem Sie Virenschleifen direkt in Ihr Produkt einbauen.
           </Text>
         </ImageBlock>

         <Container big>
           <Row justify="space-between">
             <Column s={12}>
               <Container full nop>
                 <Title variant="h2" size="large" align="center">Einfache Preisgestaltung</Title>
                 <Line bgColor="primary"  />
                 <Text size="medium" align="center">
                  Wir halten unsere Preise so einfach wie möglich, damit wir uns auf die Dinge konzentrieren können, die am wichtigsten sind - und Ihnen dabei helfen, eine erstaunliche Marke und ein erstaunliches Geschäft aufzubauen.
                 </Text>
               </Container>
             </Column>

             <Column md={8}>
               <div style={{padding: '30px', border: '2px solid #ebebeb', borderRadius: '16px'}}>
                 <Title variant="h4" align="center" style={{paddingTop: '0'}} size="small">Retainer-Programm</Title>
                 <Text size="small" align="center">
                  Wir empfehlen dieses Modell, wenn Sie anhaltende und langfristige Outsourcing-Anforderungen haben. Mit dem Retainer-Programm stehen Ihnen dedizierte Ressourcen zur Verfügung, um Ihren Auftragsbestand oder die geplante Roadmap zu bearbeiten.
                 </Text>
               </div>
             </Column>
             <Column md={4} >
               <div style={{padding: '30px', border: '2px solid #ebebeb', borderRadius: '16px'}}>
                 <Title variant="h4" align="center" style={{paddingTop: '0'}} size="small">Fixkosten</Title>
                 <Text size="small" align="center">
                  Wir können ein Angebot für ein Projekt mit einem festen Zeitplan und Kosten erstellen, vorausgesetzt, die detaillierte Spezifikation kann uns vom Kunden zur Verfügung gestellt werden. Brightscout berechnet eine Prämie basierend auf unserem Stundensatz-Benchmark-Preis, um die Risiken von Unterschätzung, Anforderungsschwankungen, Überarbeitungen und auch die potenzielle Ausfallzeit, Wartezeit auf eine Antwort, abzudecken.
                 </Text>
               </div>
             </Column>

           </Row>
         </Container>

      </Container>
      </>
    );
  }
}

export default Services;
