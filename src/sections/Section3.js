import styled from "styled-components";
import { PhoneIcon } from "@/icons/phone-fill";
import { Button as button } from "@/Components/Button";
import { PHONE_NUMBER } from "@/constants";

const Section = styled.section`
  display: flex;
  background-color: rgb(39, 54, 71);
  flex-wrap: wrap;
  width: 100%;
  min-height: 500px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 23px;

  @media (min-width: 661px) {
    font-size: 30px;
  }

  @media (min-width: 2560px) {
    font-size: 2.2vh;
  }
`;

const Text = styled.p`
  font-size: 19px;
  margin: 2vh auto;
  line-height: 29px;

  @media (max-width: 661px) {
    font-size: 17px;
  }

  @media (min-width: 2560px) {
    font-size: 1.7vh;
    line-height: normal;
  }
`;
const Image = styled.div`
  background-image: url(/images/her2.jpeg);
  flex: 2;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  position: relative;
  filter: blur(6px);
`;

const Content = styled.div`
  min-width: 160px;
  flex: 3;
  min-height: 100px;
  padding: 12px;
  z-index: 2;
  margin: 10% 2vh;
  position: absolute;
  background-color: rgb(39, 54, 71);
  @media (max-width: 768px) {
    min-height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 20px;
    justify-content: center;
  }
  @media (min-width: 2560px) {
    margin: 5vh 5vh;
  }
`;
const Button = styled(button)`
  @media (max-width: 768px) {
    max-width: 320px;
    font-size: 19px;
  }
`;

export const Section3 = () => {
  return (
    <Section>
      <Image></Image>

      <Content>
        <Title> Met spoed een elektricien nodig? </Title>
        <Text>
          Bij Elektricien Koning hebben wij altijd een elektricien beschikbaar
          bij u in de buurt. Wij zijn namelijk actief in heel Nederland. U kunt
          bij ons terecht voor allerlei elektra werkzaamheden zoals het oplossen
          van storingen, aanleggen van elektra of het vervangen van de
          meterkast.{" "}
        </Text>
        <Button>
          <PhoneIcon />
          {PHONE_NUMBER}
        </Button>
      </Content>
    </Section>
  );
};
