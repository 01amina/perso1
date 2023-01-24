import Image from "next/image";
import styled from "styled-components";
import styles from '@/styles/Home.module.css'


const Section = styled.section `
display: flex;
padding-top: 0px;
padding-bottom: 0px;
margin-bottom: -33px;
background-color: #fcb900;
justify-content: space-between;
`;
const Button = styled.button`
border-radius: 20px;
background-color: #2854ad;
margin-bottom: 0.5em;
font-size: 1.5em;
position: absolute;
margin-left: 25%;

border-color: rgba(0,0,0,.05);
letter-spacing: .03em;
text-align: center;
padding: 13px;

`;
const H1 = styled.h1`
color: white;
font-size: 40px;
padding: 80px;
`;
export const Section5 = ()=>{
    return (

    <Section>
<div> 
    
  <H1>Elektricien Koning 24/7 Nooddienst</H1>
<Button>Bel ons</Button>
</div>

<Image src={`/images/Sback1.jpeg`} width='800' height='420' alt="pet"   />
    </Section>

    );
    };