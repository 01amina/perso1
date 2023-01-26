import styled from "styled-components";
import { Label } from "@/Components/Label";
import { Input } from "@/Components/Input";
import { Button } from "@/Components/Button";
import Image from "next/image";

const Section = styled.section`
  padding: 150px;
  height: 1120px;
  background-color: rgb(25, 36, 48);
  justify-content: space-between;
  display: flex;
`;
const Div = styled.div`
  padding: 90px;
  margin-top: -50px;
  background-color: white;
  height: 800px;
  width: 900px;
  justify-content: space-between;
  display: flex;
`;
const Div1 = styled.div`
  background-color: rgb(236, 178, 76);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 800px;
`;
const Div2 = styled.div`
  background-color: white;
  padding: 0%;
  width: 50%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 30px;
  color: black;
  display: block;
  font-weight: bold;
  text-align: center;
  margin-bottom: 19px;
`;
const Text = styled.div`
  font-size: 17px;
  color: black;
  text-align: center;
  display: block;
  margin-left: 80px;
  margin-right: 80px;
  line-height: 30px;
`;
const Social = styled.div`
  display: block;
  text-align: center;
  margin-top: 30px;
`;

export const Section9 = () => {
  return (
    <Section>
      <Div1>
        <Title>Elektricien Koning</Title>
        <Text>
          Indien u een vraag heeft over één van onze diensten, dan kunt u het
          contactformulier invullen. Wij nemen dan zo snel mogelijk contact met
          u op
          <br></br>
          <br></br>Let op: indien uw aanvraag een spoedopdracht betreft, raden
          wij aan om telefonisch contact met ons op te nemen. Wij zijn 24/7
          bereikbaar.
        </Text>
        <Social>
          <a style={{ marginRight: "20px" }}>
            <Image src={`/images/twi.png`} width="20" height={20}></Image>
          </a>
          <a style={{ marginRight: "20px" }}>
            {" "}
            <Image src={`/images/fb.png`} width="20" height={20}></Image>
          </a>
          <a style={{ marginRight: "20px" }}>
            {" "}
            <Image src={`/images/insta.png`} width="20" height={20}></Image>
          </a>
          <a style={{ marginRight: "20px" }}>
            <Image src={`/images/mail.png`} width="20" height={20}></Image>
          </a>
        </Social>
      </Div1>

      <Div2>
        <Title>contact</Title>
        <form>
          <Label>E-mailadres</Label>
          <br></br>
          <Input type={"text"} />
          <br></br>
          <Label>Telefoonnummer</Label>
          <br></br>
          <Input type={"text"} />
          <br></br>
          <Label>Onderwerp</Label>
          <br></br>
          <Input type={"text"} />
          <br></br>
          <Label>Bericht</Label>
          <br></br>
          <textarea
            style={{
              display: "block",
              margin: "auto",
              width: "400px",
              height: "70px",
              backgroundColor: "white",
            }}
          ></textarea>
          <Button
            style={{
              marginTop: "10px",
              display: "block",
              textAlign: "center",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            VERZENDEN
          </Button>
        </form>
      </Div2>
    </Section>
  );
};
