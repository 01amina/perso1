import { TruckOutline } from "@/icons/truck-outline";
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
  max-width: 340px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #242424;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 20px;
  margin: 12px 15px;

  svg {
    height: 60px;
    width: 60px;

    path {
      fill: var(--primary-color);
    }
  }
`;

const ItemIcon = styled.span`
  font-size: 38px;
`;

const ItemTitle = styled.h3`
  margin-top: 14px;
  margin-bottom: 10px;
`;

const ItemDesc = styled.p``;

const Item = ({ title, desc, iconName }) => {
  return (
    <ItemElement>
      <ItemIcon>
        <i className={`bi ${iconName}`}></i>
      </ItemIcon>
      <ItemTitle>{title}</ItemTitle>
      <ItemDesc>{desc}</ItemDesc>
    </ItemElement>
  );
};

export const Section2 = () => {
  return (
    <Section>
      <Item
        title={<>Binnen 45 min. bij u</>}
        desc={
          <>
            Heeft u een erkende elektricien nodig voor een spoedgeval? Onze
            elektriciens zijn snel ter plaatse. In de meeste gevallen binnen 45
            minuten bij u.
          </>
        }
        iconName="bi-truck"
      />
      <Item
        title={<>24/7 bereikbaar</>}
        desc={
          <>
            Dé elektricien in uw regio. 24 uur per dag en 7 dagen per week. Snel
            hulp in uw regio bij al uw elektra problemen en vragen
          </>
        }
        iconName="bi-clock-history"
      />
      <Item
        title={<>Betaalbare reparaties</>}
        desc={
          <>
            Onze elektriciens zijn specialisten in het uitvoeren van alle
            elektra werkzaamheden voor een betaalbare prijs.
          </>
        }
        iconName="bi-trophy"
      />
    </Section>
  );
};
