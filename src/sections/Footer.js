import styled from "styled-components";

const Section=styled.section`
min-height: 700px;
background-color: #273647;
width: 100%;
justify-content: center;
display: flex;
position: relative;
@media (max-width:768px) {
    min-height: 1268px;
}
@media (min-width:1024px) {
    min-height: 898px;
    
  
}



`;
const Sect1=styled.div`
background-color: #273647;
display: flex;
width: 80%;
margin-left: auto;
margin-left: auto;
height: auto;
margin-top: 28vh;
flex-wrap: wrap;
display: flex;
z-index: 0;
position: absolute;


@media (max-width:768px) {
    min-width: 90%; 
    margin-top: 32vh;
  
}
@media (min-width:1024px) {
    margin-top: 23vh;
    
  
}
@media (min-width:2560px) {
    margin-top: 13vh;
    font-size: 1.4vh;
    
  
}
`;

const T1=styled.div`
flex: 25%;
min-width: 300px;
padding: 0 15px 30px;
`;
const T2=styled.div`
flex: 25%;
min-width: 300px;
padding: 0 15px 30px;
`;
const T3=styled.div`
min-width: 300px;
flex: 25%;
padding: 0 15px 30px;
`;
const Text=styled.p`
color: #fff;
padding: 12px;
margin-bottom: 1.5em;
border-bottom: 2px solid rgba(255,255,255,.2);
font-size: 1.2em;
font-weight: bold;

`;
const Li=styled.li`
list-style: none;
border-bottom: 1px solid rgba(255,255,255,.2);
margin: 0;
::before{
    content:  "✓";
    font-family: fl-icons;
    font-size: 20px;
    color: rgb(122, 156, 89);
  
}

color: #fff;

margin-bottom: 20px;
`;
const S1 =styled.div`
min-width: 150px;
height: 170px;
min-height:120px;
background-color: rgb(236, 178, 76);
border-radius: 8px;
z-index: 2;
position: absolute;
margin: -60px 0px 0px 0px;
padding: 0 15px 30px;
display: flex;
flex-wrap: wrap;
width: 80%;
@media (max-width:1024px) {
    min-height:238px;
    min-width: 98%;
}
@media (min-width:2560px) {
    min-height: 250px;
    font-size: 1.6vh;
    
  
}

`;
const LeftSide =styled.div`
flex: 70%;
min-width: 350px;
padding: 0;
text-align: left;
margin: auto;

`;
const RightSide =styled.div`
background-image: url(/images/foot2.png);
background-repeat: no-repeat;
margin-top: 4vh;
background-size: 270px;
flex: 30%;
@media (max-width:768px) {
    background-size: 190px;
    margin-top: -4.5vh;
    min-width: 50%;
}

`;
const Title =styled.h2`
color: black;
font-size: 1.7em;
margin-bottom: 1.3vh;
`;
const Text1 =styled.p`
font-size: 1em;
color: black;
@media (max-width:661px) {
    width: 230px; 
}
`;

const Ul =styled.ul`
   line-height: 1.8;
   font-size: 0.9em;

`;
const Table =styled.table`
  width: 100%;
 
  font-size: 0.9em;
`;
const Tr =styled.tr`
     display: table-row;
`;
const Td =styled.td`
 line-height: 1.3;
  border-bottom: 1px solid rgba(255,255,255,.2);
  margin: 0;
  padding: 0.5em;

`;

const Image1 = styled.div`
background-image: url("/images/Foot.png");
padding: 100px;
background-size: 300px;
background-repeat: no-repeat;
@media (max-width:661px) {
    background-size: 250px;
}

`;





export const Footer=()=>{

    return(
<Section>
<S1>
<LeftSide>
    <Title>Elektricien Koning</Title>
    <Text1>Een elektricien nodig? Wij hebben altijd
         een professionele 
         elektricien beschikbaar bij u in de buurt.</Text1>
</LeftSide>
<RightSide>
</RightSide>
    </S1>

  
   <Sect1>
       <T1>
           <Text>ONZE DIENSTEN</Text>
           <Ul>
               <Li>Elektra aanleggen</Li>
               <Li> Meterkast uitbreiden</Li>
               <Li> Groepenkast vervangen</Li>
               <Li> Kortsluiting en storingen</Li>
               <Li>24/7 Spoeddienst</Li>
           </Ul>
       </T1>
       <T2>
           <Text>OPENINGSTIJDEN</Text>
           <Table>
               <Tr>
                   <Td>Maandag</Td>
                   <Td>00:00 – 00:00</Td>
                </Tr>
                   <Tr>
                      <Td>Dinsdag	</Td>
                     <Td>00:00 – 00:00</Td>
                    </Tr>
                   <Tr>
                       <Td>Woensdag</Td>
                       <Td>00:00 – 00:00</Td>
                       </Tr>
                   <Tr>
                       <Td>Donderdag</Td>
                       <Td>00:00 – 00:00</Td>
                    </Tr>
                   <Tr>
                   <Td>Vrijdag</Td>
                    <Td>00:00 – 00:00</Td>
                    </Tr>
                   <Tr>
                       <Td>Zaterdag</Td>
                       <Td>00:00 – 00:00</Td>
                    </Tr>
                   <Tr>
                       <Td>Zondag</Td>
                       <Td>00:00 – 00:00</Td>
                    </Tr>
               
           </Table>
       </T2>
       <T3>
<Text>IN DE BUURT</Text>
<Image1 >
    
</Image1>     
 </T3>
   </Sect1>
   


</Section>

    )

}