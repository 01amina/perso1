import styled from "styled-components";
import { PhoneIcon } from "@/icons/phone-fill";

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
  margin: 0 20px 20px;
`;

const SubTitle = styled.p`
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: 1px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  font-size: 22px;
  border: none;
  border-radius: 14px;
  padding: 14px 20px;
  background-color: var(--primary-color);

  svg {
    height: 24px;
    width: 24px;
    margin-right: 5px;
    transform: translateY(5px);
  }
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
