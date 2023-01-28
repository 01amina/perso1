
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
  background-color: white;
`;

const ItemElement = styled.div`
  flex: 1;
  max-width: 440px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #242424;
  text-align: center;
  padding: 20px;
  margin: 12px 15px;

`;

const ItemIcon = styled.span`
  font-size: 38px;
`;

const ItemTitle = styled.h3`
  margin-top: 14px;
  margin-bottom: 10px;
`;
const T2 = styled.h4`
 font-weight: lighter;
`;

const ItemDesc = styled.p``;

const Item = ({ title, desc, img,t2 }) => {
  return (
    <ItemElement>
      <ItemIcon>
      <img width={100} src={img}  /> 
      </ItemIcon>
      <ItemDesc>{desc}</ItemDesc>
      <ItemTitle>{title}</ItemTitle>
      <T2>{t2}</T2>
    </ItemElement>
  );
};

export const Section8 = () => {
  return (
    <Section>
      <Item
        title={<>Marieke de jong</>}
        desc={
          <>
           Oscar van Elektricien Koning heeft bij ons een nieuwe moderne groepenkast geïnstalleerd. Hij kwam op de afgesproken tijd. Heeft het netjes gemonteerd. Ik ben er erg blij mee. Oscar is een echte vakman. Hij is erg communicatief en reageert snel op emailtjes. Aanrader!
          </>
        }
        img='/images/cl1.png'
        t2={<>Facebook</>}
      />
      <Item
        title={<>jack p .</>}
        desc={
          <>
Ik had problemen met mijn meterkast. Ik heb een afspraak gemaakt met Elektricien Koning en de storing kon direct verholpen worden. Gelukkig viel de prijs ook nog mee!
          </>
        }
        img='/images/cl5.png'
        t2={<>Google+</>}
      />
      <Item
        title={<>Rob zwart</>}
        desc={
          <>
          Zeer tevreden over de elektricien en zijn werkzaamheden. Herstelt ook nog de foute aansluitingen van eerder ingeschakelde installateurs! Heeft tevens een nieuwe oven en inductie kookplaat geïnstalleerd! Dik in orde en ik schakel hem graag weer in voor een komende klus!
          </>
        }
        img='/images/cl3.jpeg'
        t2={<>Facebook</>}
      />
    </Section>
  );
};