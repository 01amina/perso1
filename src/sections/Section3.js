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
  background-image: url(/images/her2.jpeg);
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
  justify-content: center;
  flex: 50%;
  background-color: rgb(39, 54, 71);
  @media (max-width: 768px) {
    z-index: 2;
    padding: 12px;
    margin-left: 52px;
    margin-right: 52px;
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
  text-align: center;
  padding: 10px;
  max-width: 520px;
`;
const Text = styled.p`
  line-height: normal;
  font-size: 20px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  min-width: 200px;
  margin-bottom: 2vh;
  line-height: 6vh;
  font-size: 32px;
  font-weight: bolder;
  flex: 50%;

  @media (min-width: 2560px) {
    font-size: 2.5vh;
  }
`;
const Button = styled(button)`
  margin-top: 4vh;
  @media (max-width: 661px) {
    margin-top: 3vh;
  }
  @media (min-width: 2560px) {
    font-size: 2vh;
    margin-top: 0;
  }
`;

export const Section3 = () => {
  return (
    <Section>
      <Content>
        <Image></Image>

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
              bel ons
            </Button>
          </RContent>
        </RightContent>
      </Content>
    </Section>
  );
};
