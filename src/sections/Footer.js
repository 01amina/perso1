import styled from "styled-components";
import Image from "next/image";

const Section=styled.section`
padding:180px;
background-color: #273647;
height: 580px;


`;
const Sect1=styled.div`
background-color: #273647;
padding: 12px;
margin-top: 20px;
height: 400px;
display: flex;
justify-content: space-between;

`;
const T1=styled.div`

`;
const T2=styled.div`

`;
const T3=styled.div`


`;
const Text=styled.div`
color: #fff;
margin-bottom: 20px;
font-size: 25px;
font-weight: bold;

`;
const Li=styled.li`
color: #fff;
margin-bottom: 20px;
`;
const S1=styled.div`
background-color:  rgb(236, 178, 76);
padding: 20px;
margin-top: -270px;
display: flex;

border-radius: 10px;
`;
const SS1=styled.div`
min-width: 60%;

`;
const SS2=styled.div`
min-width: 10%;
height: 160px;
`;
const Text4=styled.div`
font-size: 30px;
margin-top: 20px;
color: black;
margin-bottom: 20px;
font-weight: bold;
`;



export const Footer=()=>{

    return(
<Section>
    <S1>
<SS1><Text4>Elektricien Koning</Text4>
<p style={{color:'black', fontSize:'20px'}} >Een elektricien nodig? Wij hebben altijd een professionele elektricien beschikbaar bij u in de buurt.</p>
</SS1>
<SS2>
    <Image src={`/images/foot2.png`} width='250'height={130} />
</SS2>
    </S1>
   <Sect1>
       <T1>
           <Text>ONZE DIENSTEN</Text>
           <ul>
               <Li>Elektra aanleggen</Li>
               <Li>Meterkast uitbreiden</Li>
               <Li>Groepenkast vervangen</Li>
               <Li>Kortsluiting en storingen</Li>
               <Li>24/7 Spoeddienst</Li>
           </ul>
       </T1>
       <T2>
           <Text>OPENINGSTIJDEN</Text>
           <table>
               <tr>
                   <td>Maandag</td>
                   <td>00:00 – 00:00</td>
                </tr>
                   <tr>
                       <td>Dinsdag	</td>
                       <td>00:00 – 00:00</td>
                       </tr>
                   <tr>
                       <td>Woensdag</td>
                       <td>00:00 – 00:00</td>
                       </tr>
                   <tr>
                       <td>Donderdag</td>
                       <td>00:00 – 00:00</td>
                    </tr>
                   <tr>
                   <td>Vrijdag</td>
                    <td>00:00 – 00:00</td>
                    </tr>
                   <tr>
                       <td>Zaterdag</td>
                       <td>00:00 – 00:00</td>
                    </tr>
                   <tr>
                       <td>Zondag</td>
                       <td>00:00 – 00:00</td>
                    </tr>
               
           </table>
       </T2>
       <T3>
<Text>IN DE BUURT</Text>

<Image src={`/images/Foot.png`} width='300'height={150} />       </T3>
   </Sect1>
   


</Section>

    )

}