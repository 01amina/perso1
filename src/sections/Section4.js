import styled from "styled-components";

const Section = styled.section`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
`;
const Item = styled.div`
  display: flex;
 justify-content: center;
text-align: left;
place-content: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url(${({ img }) => {
    return img;
  }});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  color: white;
  background-color: #2854ad;
  padding: 100px;
  min-width: 25%;

  @media (max-width:425px){
    min-width: 90%;
  }
 
`;
const Title=styled.h2`
font-size: 22px;
font-weight: bold;
margin-bottom: 12px;
`;
const Div=styled.div`
font-size: 0.8em;
min-width: 300px;
@media (max-width:768px){
    min-width: 240px;
    
  }
`;
const Text=styled.p`
font-size: 1.3em;
`;

export const Section4 = () => {
  return (
    <Section>

      <Item img='/images/sec1.jpeg'>
       
        <Div>
      <Title>Elektrotechniek</Title>
      <Text>Onder elektrotechniek verstaan we verschillende aspecten van het elektriciteitsnetwerk in uw woning.
        
Elektriciens Koning helpen u vakkundig bij de uitvoer van diverse klussen op het gebied van elektra. </Text>
     </Div>
      </Item>
      <Item img='/images/sec2.jpeg'  >
      <Div>
      <Title>Groepenkast</Title>
      <Text>De groepenkast wordt vaak gezien als het hart van uw woning op het gebied van elektra. Een groepenkast zorgt namelijk voor de regulering van de elektriciteit in huis, 
        door voldoende stroom naar de verschillende groepen door te sluizen. </Text>
        </Div>
         </Item>
      <Item img='/images/sec3.jpeg'>
        <Div>
      <Title>Kortsluiting</Title>
      <Text>Een kortsluiting in huis vormt voor veel consumenten een grote ergernis,&nbsp;mede door de risico’s die een kortsluiting met zich meebrengt. 
      De experts van Elektricien Koning  staan voor u klaar om de gewenste elektra hulp te bieden!
      </Text>
      </Div>
      </Item>
    
      <Item img='/images/sec4.jpeg'>
       <Div> <Title>Elektromonteur</Title>
       <Text>Wij helpen u graag bij diverse werkzaamheden rondom elektriciteit. Niet alleen kunnen we u helpen bij de installatie van elektra, maar ook voor onderhoud kunt u bij ons terecht. Daarnaast kunt u ons ook inschakelen voor de reparatie van elektra.</Text>
      </Div>
      </Item>
      <Item img='/images/sec5.jpeg'>
    <Div> <Title>Elektra aanleggen</Title>
    <Text>Bij de nieuw-, aan- of verbouw van een woning ontkomt u niet aan het aanleggen van nieuwe elektra in huis. Onze elektriciens helpen u bij het aanleggen van elektra in uw woning of bedrijfspand!</Text>
    </Div>
      </Item>
      <Item img='/images/sec6.jpeg'>
     <Div> <Title>Storingsdienst</Title>
     <Text>Onze storingsdienst gaat voor u op zoek naar de oorzaak van de kortsluiting en probeert hierbij direct voor een passende oplossing te zorgen. Zo wordt een brand en een nieuwe kortsluiting voorkomen.</Text>
     </Div>
      </Item>
      <Item img='/images/sec7.jpeg'>
     <Div> <Title>Krachtstroom
</Title>
<Text>Bij de nieuwbouw van een woning moet de krachtstroom op de meterkast binnen de woning worden aangesloten door een elektricien. Het is hierbij erg verstandig om de hulp van Volton in te schakelen.</Text>
    </Div>
      </Item>
      <Item img='/images/sec8.jpeg'>
      <Div><Title>Ander probleem?
</Title>
<Text>Heeft u een ander elektra probleem in uw woning of bedrijfspand? Ook dan kunnen wij u helpen! Wij staan voor onder andere renovaties, reparaties en storingen voor u klaar.</Text>
</Div>
      </Item>
    </Section>
  );
};
