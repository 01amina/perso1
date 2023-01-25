import styled from "styled-components";

const Section = styled.section`
display: flex;
justify-content: center;
padding: 40px 20px;
background-color: white;
`;

const Item = styled.h1`
margin-right: 20px;
  background-image: url(${({ img }) => {
    return img;
  }});
  background-repeat: no-repeat;
  background-size:170px;
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 8px;
  color: white;
  padding: 90px;
  min-width: 25%;
box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);

  
`;
const Text=styled.div`
display: block;
font-size: 17px;
margin-left: 80px;
margin-right: -90px;
color: rgb(85,85,85);
font-weight: lighter;

`;
const Sub=styled.div`
color: black;
margin-top: 20px;
text-align: end;
margin-right: -60px;
font-weight: lighter;
font-size: 19px;
margin-bottom: 9px;
`;
const Sb= styled.div`
color: black;
font-weight: lighter;
font-size: 14px;
text-align: end;
margin-right: -60px;
`;

export const Section8=()=>{
    return(
    <Section>
          <Item  img='/images/cl4.png'>
              <Text>Oscar van Elektricien Koning heeft bij ons een nieuwe moderne groepenkast geïnstalleerd. Hij kwam op de afgesproken tijd. Heeft het netjes gemonteerd. Ik ben er erg blij mee. Oscar is een echte vakman. Hij is erg communicatief en reageert snel op emailtjes. Aanrader!</Text>
              <Sub>Marieke de jong</Sub>
              <Sb style={{ marginRight:'-30px'}} >Facebook</Sb>
      </Item>
      <Item img='/images/cl5.png' >
          <Text>Ik had problemen met mijn meterkast. Ik heb een afspraak gemaakt met Elektricien Koning en de storing kon direct verholpen worden. Gelukkig viel de prijs ook nog mee!</Text>
          <Sub>Jack P.</Sub>
          <Sb>Facebook</Sb>
      </Item>
      <Item img='/images/cl3.jpeg' >
          <Text>Zeer tevreden over de elektricien en zijn werkzaamheden. Herstelt ook nog de foute aansluitingen van eerder ingeschakelde installateurs! Heeft tevens een nieuwe oven en inductie kookplaat geïnstalleerd! Dik in orde en ik schakel hem graag weer in voor een komende klus!</Text>
          <Sub>Rob Zwart</Sub>
          <Sb>Google+</Sb>
      </Item>
    </Section>
    );
};