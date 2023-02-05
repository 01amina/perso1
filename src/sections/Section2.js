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

const icons = ["bi-truck", "bi-clock-history", "bi-trophy"];

export const Section2 = ({ data }) => {
  return (
    <Section>
      {data?.map((item, i) => {
        return (
          <Item
            key={i}
            title={item.title}
            desc={item.desc}
            iconName={icons[i]}
          />
        );
      })}
    </Section>
  );
};
