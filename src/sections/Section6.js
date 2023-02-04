import { Button as button } from "@/Components/Button";
import styled from "styled-components";
import { PhoneIcon } from "@/icons/phone-fill";
import { PHONE_NUMBER } from "@/constants";

const Section = styled.section`
  min-height: 40vh;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 2;
  background-color: white;
  min-width: 150px;
  min-height: 300px;
  padding: 25px;
  @media (min-width: 1440px) {
    font-size: 2.2vh;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  min-height: 300px;
  background-color: rgb(39, 54, 71);
  text-align: center;
  padding-top: 30px;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 2vh;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 2560px) {
    font-size: 2.3vh;
  }
`;
const Subtitle = styled.h3`
  color: wheat;
  margin-bottom: 3vh;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 2560px) {
    font-size: 1.8vh;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1em;
  line-height: 1.4;
  list-style: none;
  margin: 0 auto 1em;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 2560px) {
    font-size: 1.8vh;
    line-height: 66px;
  }
`;
const Li = styled.li`
  margin-left: 1em;
  ::before {
    content: "✓";
    font-family: fl-icons;
    font-size: 20px;
    color: rgb(122, 156, 89);
    @media (min-width: 2560px) {
      font-size: 1.8vh;
    }
  }
`;
const Item = styled.div`
  margin-bottom: 24px;
`;

const Q = styled.p`
  font-weight: bold;
  color: black;
  font-size: 1.2em;
  margin-bottom: 0.5em;
  margin-left: 12px;
`;
const A = styled.p`
  color: black;
  margin-left: 12px;
  font-size: 1em;
`;

const Button = styled(button)``;

const list = [
  {
    q: "Elektricien nodig? Elektricien in de Buurt staat voor u klaar!",
    a: (
      <>
        Of het nu gaat om het oplossen van een storing of het vervangen van de
        meterkast, wij doen het allemaal! Ook aanleggen van elektra is iets waar
        wij bij kunnen helpen. Krachtstroom aanleggen of een inductieplaat
        aansluiten, wij doen het dagelijks
      </>
    ),
  },
  {
    q: "Elektricien Koning met spoed",
    a: (
      <>
        Storingen of andere problemen met de elektra zijn ontzettend vervelend.
        Helemaal als dit gebeurt op een vervelende tijd. Toch wilt u natuurlijk
        snel van de problemen af zijn. Dus ook als u zoekt naar een elektricien
        met spoed, kunt u ons bellen. Wij streven er altijd naar om zo snel
        mogelijk bij u thuis te zijn. Ook in de avond of nacht is dit mogelijk.
        Onze storingsdienst is namelijk 24/7 actief. Aarzel dus niet en neem
        contact op als u hulp nodig heeft met uw elektra. Onze collega’s staan
        klaar voor al uw vragen
      </>
    ),
  },
  {
    q: "De kosten voor het inschakelen van een elektricien ",
    a: (
      <>
        Benieuwd naar de kosten? Dat snappen wij als geen ander. U kunt een
        offerte aanvragen of telefonisch contact opnemen. Wanneer u uitlegt waar
        u hulp bij nodig heeft, zal een van onze collega’s meer informatie geven
        over de kosten. Wij doen alles in samenspraak. Uiteraard zijn wij van
        Elektricien Koning dan ook eerlijk en transparant over de tarieven.
      </>
    ),
  },
];
const FAQ = ({ q, a }) => {
  return (
    <Item>
      <Q>{q}</Q>
      <A>{a}</A>
    </Item>
  );
};

export const Section6 = () => {
  return (
    <Section>
      <LeftSide>
        {list.map((item, i) => {
          return <FAQ key={i} q={item.q} a={item.a} />;
        })}
      </LeftSide>
      <RightSide>
        <Title>Direct een elektricien nodig?</Title>
        <Subtitle>Wij helpen u met alle elektra werkzaamheden </Subtitle>
        <Ul>
          <Li> 95% Direct opgelost,</Li>
          <Li>Dag en nacht bereikbaar,</Li>
          <Li>eterkast vervangen,</Li>
          <Li>toringdienst</Li>
        </Ul>
        <Button href={`tel:${PHONE_NUMBER}`}>
          <PhoneIcon />
          {PHONE_NUMBER}
        </Button>
      </RightSide>
    </Section>
  );
};
