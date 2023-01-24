import styled from "styled-components";
import { StyledComponent } from "styled-components";
import Image from "next/image";

const Section = styled.section `
display: flex ;
background-color:rgb(39, 54, 71);
display: flex;
justify-content: space-between;
min-width: 100%;
`;
const Title=styled.h1`
font-size: 36px;
padding: 70px;
margin-left: 60px;
`;
const SubTitle =styled.p`

font-size: 23px;
line-height: 29px;
margin-left: 60px;
margin-bottom: 20px;
margin-top: -20px;
`;
const Button = styled.button`
border-radius: 20px;
background-color: #2854ad;
font-size: 1.6em;
border-color: rgba(0,0,0,.05);
padding: 0 1.2em;
margin-left: 200px;
margin-top: 12px;

`;

 
export const Section3 = ()=>{
    return (

    <Section>
        <Image src={`/images/her2.jpeg`} width='580' height='410' alt="pet"  />
   <div><Title> Met spoed een elektricien nodig? </Title>
 <SubTitle>Bij Elektricien Koning hebben wij altijd een elektricien beschikbaar bij u in de buurt. Wij zijn namelijk actief in heel Nederland. U kunt bij ons terecht voor allerlei elektra werkzaamheden zoals het oplossen van storingen, aanleggen van elektra of het vervangen van de meterkast </SubTitle>
 <Button> +33 44 55 77 6</Button></div>
    </Section>

    );
    };