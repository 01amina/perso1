import { Button as button } from "@/Components/Button";
import { PHONE_NUMBER } from "@/constants";
import styled from "styled-components";

const Section = styled.nav`
  padding: 10px;
  max-height: 90px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center; ;
`;
const Logo = styled.img`
  background-image: url(/images/Logo.jpeg);
  background-size: contain;
  padding: 39px;
  background-repeat: no-repeat;
`;
const LogoText = styled.div`
  font-weight: bolder;
  font-size: 43px;
  color: #2854ad;
  font-family: fantasy;
`;
const Leftside = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex: 1;
`;
const Button = styled(button)`
  flex: 2;
  max-width: 300px;
  margin-right: 9vh;
  @media (max-width: 425px) {
    max-width: 150px;
    margin-right: 0;
    font-size: 12px;
    padding: 9px;
  }
`;

export const Navbar = () => {
  return (
    <Section>
      <Leftside>
        <Logo></Logo>
        <LogoText>SOS</LogoText>
      </Leftside>
      <Button>{PHONE_NUMBER}</Button>
    </Section>
  );
};
