import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";

const Section = styled.section`
  width: 100%;
  min-height: 370px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 2560px) {
    min-height: 570px;
  }
`;

const Image = styled.img`
  background-image: url(/images/Sback1.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 250px;
  flex: 50%;
  min-height: 300px;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    filter: blur(3px);
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: 768px) {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const RightContent = styled.div`
  display: flex;
  place-items: center;
  text-align: center;
  justify-content: center;
  flex: 50%;
  background-color: rgb(236, 178, 76);
  @media (max-width: 768px) {
    z-index: 2;
    padding: 12px;
    margin-left: 52px;
    margin-right: 52px;
  }
  @media (max-width: 425px) {
    min-height: 374px;
    min-width: 100%;
    margin: auto;
    padding: 20px;
  }
`;
const RContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  min-width: 200px;
  line-height: 6vh;
  font-size: 30px;
  flex: 50%;
  @media (max-width: 661px) {
    font-size: 24px;
  }
  @media (min-width: 2560px) {
    font-size: 2.5vh;
  }
`;
const Button = styled(button)`
  margin-top: 4vh;
  @media (max-width: 661px) {
  }
  @media (min-width: 2560px) {
    font-size: 2vh;
    margin-top: 0;
  }
`;

export const Section5 = () => {
  return (
    <Section>
      <Content>
        <Image></Image>

        <RightContent>
          <RContent>
            <Title>Elektricien Koning 24/7 Nooddienst</Title>
            <Button>
              <PhoneIcon />
              bel ons
            </Button>
          </RContent>
        </RightContent>
      </Content>
    </Section>
  );
};
