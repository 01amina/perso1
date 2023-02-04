import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";
import { PHONE_NUMBER } from "@/constants";

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
  object-fit: cover;
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
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 54, 71);

  @media (max-width: 768px) {
    z-index: 2;
    padding: 12px;
    margin: 50px;
  }

  @media (max-width: 425px) {
    min-height: 374px;
    min-width: 100%;
    margin: 0;
    padding: 20px;
    justify-content: center;
  }
`;

const RContent = styled.div`
  max-width: 520px;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 2vh;
  font-size: 32px;
  line-height: 1.4;
  font-weight: bolder;
  flex: 50%;

  @media (min-width: 2560px) {
    font-size: 2.5vh;
  }
`;

const Text = styled.p`
  max-width: 90%;
  font-size: 16px;
  line-height: 1.3;
  margin-top: 20px;
`;

const Button = styled(button)`
  margin-top: 20px;
`;

export const Section3 = () => {
  return (
    <Section>
      <Content>
        <Image src="/images/her2.jpeg" alt="fixing electicity wires" />
        <RightContent>
          <RContent>
            <Title> Met spoed een elektricien nodig? </Title>
            <Text>
              Bij Elektricien Koning hebben wij altijd een elektricien
              beschikbaar bij u in de buurt. Wij zijn namelijk actief in heel
              Nederland. U kunt bij ons terecht voor allerlei elektra
              werkzaamheden zoals het oplossen van storingen, aanleggen van
              elektra of het vervangen van de meterkast.{" "}
            </Text>
            <Button>
              <PhoneIcon />
              {PHONE_NUMBER}
            </Button>
          </RContent>
        </RightContent>
      </Content>
    </Section>
  );
};
