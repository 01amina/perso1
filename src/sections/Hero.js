import styled from "styled-components";
import { PhoneIcon } from "@/icons/phone-fill";
import { Button } from "public/Components/Button";

const Section = styled.section`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(/images/hero.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 46px;
  color: white;
  margin: 0 20px 20px ;
  margin-top: 40px;
`;

const SubTitle = styled.p`
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: 1px;

`;


export const HeroSection = () => {
  return (
    <Section>
      <Title> Elektricien Koning</Title>
      <SubTitle>ELEKTRICIEN NODIG? SCHAKEL ONS DIRECT IN.</SubTitle>
      <Button>
        <PhoneIcon />
        +44 333 222 1111
      </Button>
    </Section>
  );
};
