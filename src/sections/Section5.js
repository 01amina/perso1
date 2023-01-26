import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";

const Section = styled.section`
  display: flex;
  padding-top: 2px;
  padding-bottom: 0px;
  background-color: #fcb900;
  justify-content: space-between;
`;

const H1 = styled.div`
  color: white;
  font-size: 39px;
  display: block;
  margin-top: 140px;
  margin-left: 10px;
  margin-bottom: 50px;
  text-align: center;
`;
export const Section5 = () => {
  return (
    <Section>
      <div>
        <H1>Elektricien Koning 24/7 Nooddienst</H1>
        <Button
          style={{
            marginTop: "10px",
            display: "block",
            textAlign: "center",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          {" "}
          <PhoneIcon /> Bel ons
        </Button>
      </div>

      <Image src={`/images/Sback1.jpeg`} width="800" height="420" alt="pet" />
    </Section>
  );
};
