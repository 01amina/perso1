import styled from "styled-components";
import { Button } from "public/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";

const Section= styled.section`
padding-top: 30px;
padding-bottom: 30px;
min-height: 700px;
background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url(/images/back1.jpeg);
background-repeat: no-repeat;
background-size: cover;
`;
const Div = styled.div`
padding: 100px ;
height: 550px;
width: 800px;
margin-left: 25%;
margin-right: 25%;
margin-top: 3%;
background-color: white;
border-color: #bf1e2e;


`;
const H1 = styled.p`
margin-bottom: 20px;
font-size: 40px;
color: #2854ad;
font-weight: bold;
margin-top: -40px;
`;
const Text = styled.p`
font-size: 20px;
color: grey;
line-height: normal;
`;



export const Section7 = ()=>{
 return(

    <Section>
<Div>
    <H1>
    Elektricien Koning staat altijd voor u klaar!
    </H1>
    <Text>
    Bent u opzoek naar een professionele elektricien met veel ervaring? Dan bent u bij Elektricien Koning aan het juiste adres. Wij zijn namelijk door heel Nederland actief waardoor wij altijd een elektricien beschikbaar hebben bij u in de regio.<br></br><br></br>
    Wij kunnen allerlei verschillende soorten elektra werkzaamheden verrichten. Van het aanleggen van elektra tot het verhelpen van storingen, voor ons is het geen enkel probleem. Wij doen dit dagelijks en hierdoor kunnen wij 95% van de storingen direct oplossen
    <br></br><br></br>Dus, heeft u last van een storing, wilt u elektra laten aanleggen of renoveren? Aarzel dan niet en neem contact met ons op. In de meeste gevallen is er direct een elektricien beschikbaar om u te helpen
</Text>
<Button style={{marginTop:' 30px'}}><PhoneIcon></PhoneIcon>+44 333 222 1111</Button>
</Div>
    </Section>






 )



}