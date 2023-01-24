import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  display: flex;
  padding: 30px 20px;
  background-color: white;
  flex-wrap: wrap;
  


`;
const Item = styled.h1`

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
  border: 1px solid lightgray;
  border-radius: 8px;
  color: white;
  background-color: #2854ad;
  padding: 100px;
  min-width: 25%;

  
  
`;

export const Section4 = () => {
  return (
    <Section>
      <Item img='/images/sec1.jpeg'>
        <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec2.jpeg' >
      <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec3.jpeg'>
      <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec4.jpeg'>
      <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec5.jpeg'>
      <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec6.jpeg'>
      <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec7.jpeg'>
      <p>Elektrotechniek</p>
      </Item>
      <Item img='/images/sec8.jpeg'>
      <p>Elektrotechniek</p>
      </Item>
    </Section>
  );
};
