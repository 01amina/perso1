import styled from "styled-components";

const Section=styled.section`
min-height: 680px;
background-color: #273647;
width: 100%;
display: flex;
position: relative;
justify-content: center;
@media (max-width:1024px) {
    min-height: 1008px;
}



`;
const Sect1=styled.div`
background-color: #273647;
display: flex;
width: 70%;
height: auto;
flex-wrap: wrap;
display: flex;
z-index: 0;
margin-top: 31vh;
position: absolute;
`;

const T1=styled.div`
flex: 25%;
min-width: 300px;
`;
const T2=styled.div`
flex: 25%;
min-width: 300px;
`;
const T3=styled.div`
min-width: 300px;
flex: 25%;
`;
const Text=styled.p`
color: #fff;
margin-bottom: 20px;
font-size: 25px;
margin-top: 3vh;
font-weight: bold;

`;
const Li=styled.li`
list-style: none;
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
width: 80%;
min-width: 150px;
height: 190px;
min-height:120px;
padding: 10px;
background-color: rgb(236, 178, 76);
border-radius: 8px;
z-index: 2;
position: absolute;
margin: -60px 0px 0px 0px;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
text-align: left;
@media (max-width:1024px) {
    min-height:249px;
}

`;
const SS1 =styled.div`
flex: 70%;
min-width: 350px;
padding: 12px;
text-align: left;


`;
const SS2 =styled.div`
background-image: url(/images/foot2.png);
background-repeat: no-repeat;
background-size: 80%;
flex: 30%;
padding: 100px;
min-width: 300px;
@media (max-width:1024px) {
    background-size: 50%;
}

`;
const Text4 =styled.h2`
color: black;
margin-bottom: 2vh;
`;
const Text1 =styled.p`
font-size: 16px;

color: black;
@media (max-width:661px) {
    width: 230px; 
}
`;
const Image =styled.img`

`;
const Tr =styled.tr`

`;
const Td =styled.td`
line-height: 24px;

`;

const Image1 = styled.div`
background-image: url("/images/Foot.png");
padding: 100px;

background-size: 350px;
background-repeat: no-repeat;
@media (max-width:661px) {
    background-size: 250px;
}

`;





export const Footer=()=>{

    return(
<Section>
<S1>
<SS1>
    <Text4>Elektricien Koning</Text4>
    <Text1>Een elektricien nodig? Wij hebben altijd
         een professionele 
        elektricien beschikbaar bij u in de buurt.</Text1>
</SS1>
<SS2>
    <Image>
    </Image>
</SS2>
    </S1>

  
   <Sect1>
       <T1>
           <Text>ONZE DIENSTEN</Text>
           <ul>
               <Li>Elektra aanleggen</Li>
               <Li> Meterkast uitbreiden</Li>
               <Li> Groepenkast vervangen</Li>
               <Li> Kortsluiting en storingen</Li>
               <Li>24/7 Spoeddienst</Li>
           </ul>
       </T1>
       <T2>
           <Text>OPENINGSTIJDEN</Text>
           <table>
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
               
           </table>
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