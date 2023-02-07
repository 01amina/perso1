import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";
import { PHONE_NUMBER } from "@/constants";

const Section = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  position: relative;
  justify-content: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(/images/back1.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 425px) {
    background-image: none;
    background-color: white;
  }
`;
const Div = styled.div`
  width: 80%;
  padding: 28px;
  text-align: center;
  min-width: 300px;
  margin: auto;
  background-color: white;
  border-color: #bf1e2e;
  @media (max-width: 425px) {
    width: 100%;
    background-color: whitesmoke;
  }
`;
const H1 = styled.h2`
  font-size: 40px;
  margin-bottom: 15px;
  color: #2854ad;
  font-weight: bold;
  @media (max-width: 793px) {
    font-size: 26px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;
const Text = styled.p`
  font-size: 20px;
  margin-top: 2vh;
  color: grey;
  line-height: normal;
  @media (min-width: 2560px) {
    font-size: 1.5vh;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const Button = styled(button)`
  font-size: 1.2em;
  margin-top: 5vh;
`;

export const Section7 = ({ data }) => {
  return (
    <Section>
      <Div>
        <H1>{data?.title}</H1>
        <Text>
        {data?.text}
        </Text>
        <Button href={`tel:${PHONE_NUMBER}`}>
          <PhoneIcon />
          {PHONE_NUMBER}
        </Button>
      </Div>
    </Section>
  );
};
