import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";


const Section = styled.section `
width: 100%;
min-height: 370px;
display: flex;

flex-wrap: wrap;


`;


const Image = styled.img `
background-image: url(/images/Sback1.jpeg);
background-repeat: no-repeat;
background-size: cover;
min-width: 250px;
flex: 50%;
min-height: 300px;
`;

const Content = styled.div `
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
text-align: center;
`;
const RightContent = styled.div `
display: grid;
place-items: center;
flex: 50%;
min-width: 150px;
min-height: 200px;
background-color: rgb(236, 178, 76);
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
`;
const Button =styled(button)`

margin-top: 8vh;
@media (max-width : 661px){
    margin-top: 0vh;
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