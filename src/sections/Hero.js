import styled from "styled-components";
import { PhoneIcon } from "@/icons/phone-fill";
import { Button } from "@/Components/Button";
import { PHONE_NUMBER } from "@/constants";

const Section = styled.section`
  width: 100vw;
  height: 60vh;
  display: flex;
  text-align: center;
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
  font-size: 16px;
  background-position: center;
 @media (min-width:760px){

  font-size: 20px;
 }
 
`;

const Title = styled.h1`
  font-size: 2.3em;
  color: white;
  margin-bottom: 29px;

`;

const SubTitle = styled.p`
  font-size: 1.1empx;
  line-height: 1.2;
  letter-spacing: 1px;
  margin-bottom: 29px;


`;


export const HeroSection = () => {
  return (
    <Section>
      <Title> Elektricien Koning</Title>
      <SubTitle>ELEKTRICIEN NODIG? SCHAKEL ONS DIRECT IN.</SubTitle>
      <Button>
        <PhoneIcon />
        {PHONE_NUMBER}
      </Button>
    </Section>
  );
};
