import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 40px;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: antiquewhite;
`;

const Text = styled.h2`
  color: black;
  font-size: 28px;
  display: block;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Item = styled.div`
  width: 100%;
  position: relative;
  color: white;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${({ img }) => {
      return img;
    }});
  background-repeat: no-repeat;
  background-size: cover;

  :before {
    content: "";
    display: block;
    padding-top: 50%;
  }

  @media (min-width: 480px) {
    width: 50%;

    :before {
      padding-top: 100%;
    }
  }

  @media (min-width: 860px) {
    width: 25%;
  }
`;

const ItemContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 140%;
  text-align: center;
  font-weight: bold;

  @media (min-width: 2560px) {
    font-size: 4em;
  }
`;
const Iteem = ({ title, image }) => {
  return (
     <Item img={image}>
       <ItemContent>
         <Title>{title}</Title>
       </ItemContent>
     </Item>
  );
};

export const Section4 = ({ data }) => {
  return (
    <Section>
      <Text>Onze diensten</Text>
     <Items> {data?.map((item, i) => {
        return (
          
          <Iteem
            key={i}
            image={item.image}
            title={item.title}
           
          />
        );
      })}          </Items>

    </Section>
  );
};
