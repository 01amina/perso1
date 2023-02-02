import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";


const Section = styled.section `
width: 100%;
min-height: 370px;
display: flex;
flex-wrap: wrap;

@media (min-width:2560px) {
    min-height: 570px;
}

`;


const Image = styled.img `
background-image: url(/images/Sback1.jpeg);
background-repeat: no-repeat;
background-size: cover;
min-width: 250px;
flex: 50%;
min-height: 300px;
@media (max-width : 768px){
 position: relative;
 min-width: 100%;
 position: relative;
 z-index: 1;
 min-height: 373px;
 filter: blur(3px);
}
`;

const Content = styled.div `
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
text-align: center;
`;
const RightContent = styled.div `
display: flex;
place-items: center;
justify-content: center;
flex: 50%;
background-color: rgb(236, 178, 76);
@media (max-width : 768px){
 position: absolute;
 z-index: 2;
 margin: 10% 20% ;
padding: 12px;

}
@media (max-width :425px){
 min-height: 374px;
 min-width: 100%;
 margin: 0;
padding: 20px;
justify-content: center;
 }
`;
const RContent=styled.div`

`;

const Title = styled.div `
min-width: 200px;
line-height: 6vh;
font-size: 30px;
flex: 50%;
@media (max-width : 661px){
    font-size: 24px;
    margin-top: 9vh;
}
@media (min-width:2560px) {
    font-size: 2.5vh;
}
`;
const Button =styled(button)`

margin-top: 4vh;
@media (max-width : 661px){
    margin-top: 3vh;
}
@media (min-width:2560px) {
    font-size: 2vh;
    margin-top: 0;
}
`;



export const Section5 = ()=>{
    return (

    <Section>
<Content>
  <Image></Image>

  <RightContent>
    <RContent>
    <Title>
    Elektricien Koning 24/7 Nooddienst
    </Title>
   <Button>
      <PhoneIcon/>bel ons
      </Button>
      </RContent>
  </RightContent>
</Content>
    </Section>

    );
    };