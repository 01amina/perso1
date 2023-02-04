import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";
import { Facebook } from "@/icons/Facebook";
import { Twitter } from "@/icons/Twitter";
import { Email } from "@/icons/Email";
import { Instagram } from "@/icons/Instagram";

const Section = styled.section`
  width: 100%;
  padding: 0 0 100px;
  background-color: rgb(25, 36, 48);
  display: flex;

  @media (min-width: 860px) {
    padding-top: 20px;
  }

  @media (min-width: 2560px) {
    min-height: 1889px;
  }
`;

const Sec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 860px) {
    flex-direction: row;
  }

  @media (min-width: 2560px) {
    min-height: 889px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(236, 178, 76);
  padding: 40px 20px;

  @media (max-width: 425px) {
    min-height: 200px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 550px;
  text-align: center;
  padding: 10px;
  background-color: white;

  @media (max-width: 425px) {
    min-width: 250px;
    min-height: 200px;
    padding: 9px;
  }

  @media (min-width: 2560px) {
    font-size: 1.9vh;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 4vh;
  color: black;
  text-align: center;
  font-weight: bold;

  @media (max-width: 549px) {
    font-size: 1.5em;
  }
  @media (min-width: 2560px) {
    font-size: 1.9vh;
  }
`;

const Text = styled.p`
  font-size: 17px;
  line-height: 22px;
  margin-top: 4vh;
  color: black;
  text-align: center;
  @media (max-width: 320px) {
    font-size: 14px;
  }
  @media (min-width: 2560px) {
    font-size: 1.5vh;
    line-height: normal;
  }
`;
const Social = styled.div`
  text-align: center;
`;

const Input = styled.input`
  background-color: white;
  border-width: 2px;
  border: 1px solid black;
  margin-bottom: 3vh;
  min-height: 30px;
  width: 100%;

  @media (max-width: 320px) {
    margin-bottom: 1vh;
  }
  @media (min-width: 2560px) {
    min-width: 400px;
    height: 50px;
  }
`;
const Label = styled.label`
  color: black;
  display: block;
  margin-bottom: 1vh;
  text-align: center;
  font-weight: lighter;
  font-size: 0.9em;
  @media (max-width: 320px) {
    margin-bottom: 0.2vh;
  }
`;

const Textarea = styled.textarea`
  background-color: white;
  min-width: 220px;
  width: 100%;
  display: block;
  border: 1px solid black;
  margin: auto;
  @media (min-width: 2560px) {
    min-width: 400px;
    height: 50px;
  }
`;
const RightContent = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

const LeftContent = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const Media1 = styled.div`
  display: inline-block;
  margin-left: 1.5vh;
  margin-top: 2.9vh;
`;
const Button = styled(button)`
  margin-top: 2vh;
  font-size: 1.9vh;
  border-radius: 0;
`;

export const Section9 = () => {
  return (
    <Section>
      <Sec>
        <LeftSide>
          <LeftContent>
            <Title>Elektricien Koning</Title>
            <Text>
              Indien u een vraag heeft over één van onze diensten, dan kunt u
              het contactformulier invullen. Wij nemen dan zo snel mogelijk
              contact met u op
              <Text>
                Let op: indien uw aanvraag een spoedopdracht betreft, raden wij
                aan om telefonisch contact met ons op te nemen. Wij zijn 24/7
                bereikbaar.
              </Text>
            </Text>
            <Social>
              <Media1>
                <Facebook />
              </Media1>
              <Media1>
                <Instagram />
              </Media1>
              <Media1>
                <Twitter />
              </Media1>
              <Media1>
                <Email />
              </Media1>
            </Social>
          </LeftContent>
        </LeftSide>
        <RightSide>
          <RightContent>
            <Title>Contact</Title>
            <div>
              <Label>E-mailadres</Label>
              <Input type={"text"} />
            </div>
            <div>
              <Label>Telefoonnummer</Label>
              <Input type={"text"} />
            </div>
            <div>
              <Label>Onderwerp</Label>
              <Input type={"text"} />
            </div>
            <div>
              <Label>Bericht</Label>
              <Textarea cols={30} rows={5}></Textarea>
            </div>
            <Button href={`tel:${PHONE_NUMBER}`}>
              <PhoneIcon />
              VERZENDEN
            </Button>
          </RightContent>
        </RightSide>
      </Sec>
    </Section>
  );
};
