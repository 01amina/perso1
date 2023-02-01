import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";
import { PHONE_NUMBER } from "@/constants";

const Section= styled.section`
width: 100%;
height: 600px;
display: flex;
position: relative;
justify-content: center;
background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url(/images/back1.jpeg);
background-repeat: no-repeat;
background-size: cover;
`;
const Div = styled.div`
width: 80%;
padding: 20px;
height: 369px;
min-width: 300px;
margin: auto;
background-color: white;
border-color: #bf1e2e;
@media (max-width : 793px){
    height: 400px;
}
`;
const H1 = styled.h2`

font-size: 40px;
margin-bottom: 15px;
color: #2854ad;
font-weight: bold;
@media (max-width : 793px){
    font-size: 26px;
}
@media (max-width : 375px){
    font-size: 18px;
}


`;
const Text = styled.p`
font-size: 20px;
margin-top: 2vh;
color: grey;
line-height: normal;


@media (max-width : 700px){
    font-size: 14px;
}

`;
const Button =styled(button)`
font-size: 2.5vh;
margin-top: 5vh;
`;



export const Section7 = ()=>{
 return(

    <Section>
<Div>
    <H1>
    Elektricien Koning staat altijd voor u klaar!
    </H1>
    <Text>
    Bent u opzoek naar een professionele elektricien met veel ervaring? Dan bent u bij Elektricien Koning aan het juiste adres. Wij zijn namelijk door heel Nederland actief waardoor wij altijd een elektricien beschikbaar hebben bij u in de regio.<Text>
    Wij kunnen allerlei verschillende soorten elektra werkzaamheden verrichten. Van het aanleggen van elektra tot het verhelpen van storingen, voor ons is het geen enkel probleem. Wij doen dit dagelijks en hierdoor kunnen wij 95% van de storingen direct oplossen
    </Text><Text>Dus, heeft u last van een storing, wilt u elektra laten aanleggen of renoveren? Aarzel dan niet en neem contact met ons op. In de meeste gevallen is er direct een elektricien beschikbaar om u te helpen</Text>
</Text>
<Button><PhoneIcon/>{PHONE_NUMBER}</Button>
</Div>
    </Section>






 )



}