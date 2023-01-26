import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PHONE_NUMBER } from "@/constants";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  background-color: white;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 10% 40px 20px;
`;

const RightSide = styled.div`
  flex: 2;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  color: white;
  padding: 20px;
  background-color: rgb(39, 54, 71);

  @media (min-width: 960px) {
    font-size: 20px;
  }
`;

const Text1 = styled.p`
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.6em;
`;

const Subtitle = styled.p`
  max-width: 480px;
  color: wheat;
  font-size: 0.9em;
  text-align: center;
  margin: 0 auto 1em;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.9em;
  text-align: center;
  line-height: 1.4;
  list-style: none;
  margin: 0 auto 1em;

  li {
    margin-right: 1em;

    :before {
      content: "✔";
      color: #7a9c59;
      margin-right: 5px;
    }
  }
`;

const Button = styled(button)`
  display: block;
  text-align: center;
  margin: 0 auto;
`;

const Item = styled.div`
  font-size: 20px;
  color: black;
  margin-bottom: 2em;
`;

const Q = styled.p`
  font-weight: bold;
  margin-bottom: 0.5em;
  margin-left: 12px;
`;

const A = styled.p`
  font-size: 0.8em;
  margin-left: 12px;
`;

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
    q: "De kosten voor het inschakelen van een elektricien",
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
        <Text1>Direct een elektricien nodig?</Text1>
        <Subtitle>Wij helpen u met alle elektra werkzaamheden</Subtitle>
        <Ul>
          <li>95% Direct opgelost</li>
          <li>Dag en nacht bereikbaar</li>
          <li>Meterkast vervangen</li>
          <li>storingdienst</li>
        </Ul>
        <Button href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Button>
      </RightSide>
    </Section>
  );
};
