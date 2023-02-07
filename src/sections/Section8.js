import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
  background-color: white;
  @media (min-width: 2560px) {
    font-size: 1.1vh;
  }
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

const Item = ({ title, desc, img, t2 }) => {
  return (
    <ItemElement>
      <ItemIcon>
        <img width={100} src={img} />
      </ItemIcon>
      <ItemDesc>{desc}</ItemDesc>
      <ItemTitle>{title}</ItemTitle>
      <T2>{t2}</T2>
    </ItemElement>
  );
};

export const Section8 = ({ data }) => {
  return (
    <Section>
      {data?.map((item, i) => {
        return (
          <Item
            key={i}
            img={item.image}
            title={item.name}
            desc={item.review}
            t2={item.platform}
          />
        );
      })}
    </Section>
  );
};
