import styled from "styled-components";
import { PHONE_NUMBER } from "@/constants";
import { PhoneIcon } from "@/icons/phone-fill";

const Section = styled.nav`
  max-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: whitesmoke;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 24px;
  object-fit: contain;
`;

const LogoText = styled.p`
  font-family: fantasy;
  font-size: 24px;
  color: #2854ad;
  font-weight: bold;
  margin-left: 8px;
`;

const Button = styled.a`
  font-size: 16px;
  color: white;
  border-radius: 4px;
  padding: 8px 10px;
  background-color: #2854ad;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
`;

export const Navbar = () => {
  return (
    <Section>
      <LogoContainer>
        <Logo src="/images/Logo.jpeg" alt="logo" />
        <LogoText>SOS</LogoText>
      </LogoContainer>
      <Button href={`tel:${PHONE_NUMBER}`}>
        <PhoneIcon />
        {PHONE_NUMBER}
      </Button>
    </Section>
  );
};
