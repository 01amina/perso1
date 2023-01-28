import styled from "styled-components";
import { PhoneIcon } from "@/icons/phone-fill";
import { Button } from "@/Components/Button";
import { PHONE_NUMBER } from "@/constants";


const Section = styled.section `
display: grid;

background-color:rgb(39, 54, 71);
flex-wrap: wrap;
width: 100%;
min-height: 500px;
position: relative;
`;
const Title=styled.h1`
font-size: 30px;
@media (max-width : 661px){
    font-size: 23px;
}

`;
const Text =styled.p`

font-size: 19px;
margin:  2vh auto;
line-height: 29px;
@media (max-width : 661px){
    font-size: 17px;
}

`;
const Image =styled.div`
background-image: url(/images/her2.jpeg);
flex: 2;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
z-index: 1;
position: relative;
filter: blur(6px);




`;

const Content =styled.div`
min-width: 160px;
flex: 3;
min-height: 100px;
padding: 12px;
z-index: 2;
margin: 10% 2vh ;
position: absolute;
background-color: rgb(39, 54, 71);
@media (max-width : 375px){
  margin: 9vh 2vh ;
}

`;

 
export const Section3 = ()=>{
    return (

    <Section>
        <Image></Image>

   <Content><Title> Met spoed een elektricien nodig? </Title>
 <Text>Bij Elektricien Koning hebben wij altijd een elektricien beschikbaar bij u in de buurt. Wij zijn namelijk actief in heel Nederland. U kunt bij ons terecht voor allerlei elektra werkzaamheden zoals het oplossen van storingen, aanleggen van elektra of het vervangen van de meterkast </Text>
 <Button> 
   <PhoneIcon/>
   {PHONE_NUMBER}
  </Button>
 </Content>
    </Section>

    );
    };