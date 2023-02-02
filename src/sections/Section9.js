import styled from "styled-components";
import { Button as button } from "@/Components/Button";
import { PhoneIcon } from "@/icons/phone-fill";
import { Facebook} from "@/icons/Facebook";
import { Twitter } from "@/icons/Twitter";
import { Email } from "@/icons/Email";
import { Instagram } from "@/icons/Instagram";


const Section=styled.section`
width: 100%;
min-height: 990px;
background-color: rgb(25, 36, 48);
display: grid;
place-items: center;
@media (min-width:2560px) {
    min-height: 1889px;   
  
}
`;
const Sec = styled.div`
width: 80%;
max-height: 600px;
margin: auto;
display: flex;
flex-wrap: wrap;
@media (max-width : 425px){
 width: 94%;
 min-height: 690px;
}
@media (min-width:2560px) {
    min-height: 889px;
}

`;
const LeftSide = styled.div`
background-color: rgb(236, 178, 76);
min-width: 250px;
min-height: 550px;
flex: 30%;
padding: 10px;
display: grid;
place-items: center;
@media (max-width : 425px){
min-width: 250px;
min-height: 200px;
padding: 9px;
}



`;
const RightSide = styled.div`
background-color: white;
min-width: 250px;
padding: 10px;
min-height: 550px;
display: grid;
place-items: center;
flex: 50%;
@media (max-width : 425px){
min-width: 250px;
min-height: 200px;
padding: 9px;
}
@media (min-width:2560px) {
   font-size : 1.9vh;
  
  
}

`;
const Title= styled.h2`
font-size: 30px;
margin-bottom: 4vh;
margin-top: 2vh;
color: black;
text-align: center;
font-weight: bold;
@media (max-width : 549px){
    font-size: 1.5em;
}
@media (min-width:2560px) {
   font-size : 1.9vh;
  
  
}

`;
const Text=styled.p`
font-size: 17px;
line-height: 22px;
margin-top: 4vh;
color: black;
text-align: center;
@media (max-width : 320px){
    font-size: 14px;
}
@media (min-width:2560px) {
   font-size : 1.5vh;
   line-height:normal;
  
}


`;
const Social= styled.div`
text-align: center;

`;
const Input = styled.input`
background-color: white;
border-width: 2px;
border: 1px solid black;
display: block;
margin-bottom: 3vh;
min-width: 220px;
height: 30px;
@media (max-width : 320px){
    margin-bottom: 1vh;
}
@media (min-width:2560px) {
  min-width: 400px;
  height: 50px;
}
`;
const Label = styled.label`
color: black;
display: block;
margin-bottom: 1vh;
text-align: center;
font-weight: lighter;
font-size: .9em;
@media (max-width : 320px){
    margin-bottom: 0.2vh;
}
`;


const Textarea = styled.textarea`
background-color: white;
min-width: 220px;
height: 49px;
display: block;
border: 1px solid black;
margin: auto;
@media (min-width:2560px) {
  min-width: 400px;
  height: 50px;
}
`;
const RightContent = styled.div`

`;
const LeftContent = styled.div`

`;
const Media1 = styled.div`
display: inline-block;
margin-left: 1.5vh;
margin-top: 2.9vh;
`;
const Button =styled(button)`
margin-top: 5vh;
font-size: 1.9vh;
border-radius: 0;


`;




export const Section9 =()=>{

    return(

        <Section>
           <Sec>
                <LeftSide>
                    <LeftContent>
                    <Title>
                 Elektricien Koning
                </Title>
                <Text>Indien u een vraag heeft over één van onze diensten, dan kunt u het contactformulier invullen. Wij nemen dan zo snel mogelijk contact met u op
                    <Text>Let op: indien uw aanvraag een spoedopdracht betreft, raden wij aan om telefonisch contact met ons op te nemen. Wij zijn 24/7 bereikbaar.</Text>
                </Text>
                <Social>
                    <Media1> <Facebook/> </Media1>
                    <Media1> <Instagram/></Media1>
                    <Media1> <Twitter/></Media1>
                    <Media1><Email/></Media1>
               
               
               
                </Social>
                </LeftContent>
              </LeftSide>
                
               <RightSide>
                   <RightContent>
                    <Title>contact</Title>
      
           <Label>E-mailadres</Label>
             
            <Input type={'text'} />
            <Label >Telefoonnummer</Label>
             
            <Input type={'text'} />
            <Label >Onderwerp</Label>
             <br></br>
            <Input type={'text'} />
            <Label>Bericht</Label>
            <Textarea></Textarea>
<Button>
    <PhoneIcon/>
    VERZENDEN
</Button>
          </RightContent>
                </RightSide>
            </Sec>
            
        </Section>
    )

}