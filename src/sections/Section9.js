import styled from "styled-components";
import {Label} from "public/components/Label";
import {Input} from "public/components/Input";
import { Button } from "public/Components/Button";
import Image from "next/image";


const Section=styled.section`

padding: 150px;
height: 900px;
background-color: rgb(25, 36, 48);
justify-content: space-between;
display: flex;

`;
const Div=styled.div`

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
padding: 0%;
width: 40%;
`;
const Div2 = styled.div`
background-color: white;
padding: 0%;
width: 60%;
height: 600px;

`;
const Title= styled.div`
font-size: 30px;
color: black;
display: block;
font-weight: bold;
text-align: center;
margin-bottom: 60px;
margin-top: 100px;


`;
const Text=styled.div`
font-size: 17px;
color: black;
text-align: center;
display: block;
margin-bottom: 40px;
margin-left: 20px;
`;
const Social= styled.div`
display: block;
text-align: center;
margin-top: 30px;
`;





export const Section9 =()=>{

    return(

        <Section>
           
                <Div1>
                    <Title>
                 Elektricien Koning
                </Title>
                <Text>Indien u een vraag heeft over één van onze diensten, dan kunt u het contactformulier invullen. Wij nemen dan zo snel mogelijk contact met u op
                    <br></br><br></br>Let op: indien uw aanvraag een spoedopdracht betreft, raden wij aan om telefonisch contact met ons op te nemen. Wij zijn 24/7 bereikbaar.
                </Text>
                <Social>
                <a style={{marginRight:'20px'}} ><Image src={`/images/twi.png` } width='20' height={20} ></Image></a>
                <a style={{marginRight:'20px'}} > <Image src={`/images/fb.png` } width='20' height={20} ></Image></a>
                <a style={{marginRight:'20px'}} > <Image src={`/images/insta.png` } width='20' height={20} ></Image></a>
                <a style={{marginRight:'20px'}} ><Image src={`/images/mail.png` } width='20' height={20} ></Image></a></Social>
                </Div1>
                <Div2>
                    <Title>contact</Title>
       <form>
           <Label>E-mailadres</Label>
             <br></br>
            <Input type={'text'} /><br></br>
            <Label >Telefoonnummer</Label>
             <br></br>
            <Input type={'text'} /><br></br>
            <Label >Onderwerp</Label>
             <br></br>
            <Input type={'text'} /><br></br>
            <Label>Bericht</Label><br></br>
            <textarea style={{display: 'block',
margin: 'auto', width: '400px',
height: '70px', backgroundColor:'white'}} ></textarea>
<Button style={{ marginTop:'10px' }} >
    VERZENDEN
</Button>
           </form>
                </Div2>
            
            
        </Section>
    )

}