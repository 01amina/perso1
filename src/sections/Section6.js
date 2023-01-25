import { Button } from "public/Components/Button";
import styled from "styled-components";


const Section=styled.section`
padding: 100px;
background-color: white;
display: flex;
`;
const Div1=styled.div`
width: 900px;
margin-right: auto;
height: 300px;
background-color: white;
box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
margin-left: -50px;
`;
const Div2=styled.div`
width: 400px;
height: 300px;
margin-right: -50px;
background-color: rgb(39, 54, 71);
box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);

`;
const Title = styled.div`
color: black;
font-size: 20px;
font-weight: bold;
margin-left: 12px;
`;
const Text = styled.div`
color: black;
margin-left: 12px;
`;
const Text1 = styled.div`
color: white;
margin-left: 12px;
font-size: 30px;
display: block;
text-align: center;
margin-bottom: 12px;
font-weight: bold;
`;
const Subtitle= styled.div`
color: wheat;
font-size: 18px;
display: block;
text-align: center;
margin-bottom: 30px;

`;
const Ul=styled.div`
display: block;
font-size: 19px;
text-align: center;
line-height: 30px;

`;

export const Section6=()=>{

return(
<Section>
    <Div1>
<Title>Elektricien nodig? Elektricien in de Buurt staat voor u klaar!</Title>
<Text>Of het nu gaat om het oplossen van een storing of het vervangen van de meterkast, wij doen het allemaal! Ook aanleggen van elektra is iets waar wij bij kunnen helpen. Krachtstroom aanleggen of een inductieplaat aansluiten, wij doen het dagelijks
  </Text>  <br></br>
<Title>Elektricien Koning met spoed</Title>
<Text>Storingen of andere problemen met de elektra zijn ontzettend vervelend. Helemaal als dit gebeurt op een vervelende tijd. Toch wilt u natuurlijk snel van de problemen af zijn. Dus ook als u zoekt naar een elektricien met spoed, kunt u ons bellen. Wij streven er altijd naar om zo snel mogelijk bij u thuis te zijn. Ook in de avond of nacht is dit mogelijk. Onze storingsdienst is namelijk 24/7 actief. Aarzel dus niet en neem contact op als u hulp nodig heeft met uw elektra. Onze collega’s staan klaar voor al uw vragen</Text>
<br></br>
<Title>De kosten voor het inschakelen van een elektricien </Title>
<Text>Benieuwd naar de kosten? Dat snappen wij als geen ander. U kunt een offerte aanvragen of telefonisch contact opnemen. Wanneer u uitlegt waar u hulp bij nodig heeft, zal een van onze collega’s meer informatie geven over de kosten. Wij doen alles in samenspraak. Uiteraard zijn wij van Elektricien Koning dan ook eerlijk en transparant over de tarieven.</Text>

    </Div1>
    <Div2>
        <Text1>Direct een elektricien nodig?
</Text1>
<Subtitle>Wij helpen u met alle elektra werkzaamheden</Subtitle>
<Ul>95% Direct opgelost,
Dag en nacht bereikbaar,
Meterkast vervangen,
storingdienst...</Ul>
<Button style={{marginTop:'30px'}} >+44 333 222 1111</Button>
    </Div2>
</Section>


)

}