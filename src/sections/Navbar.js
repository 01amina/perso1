import { useState } from "react";
import styled from "styled-components"


 const Section=styled.section`
 padding: 30px;
 height: ${(props)=> (props.extendNavbar ? "100vh": "80px")};
 background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;

 `;
  const Li = styled.li`
  color: black;
  font-size: .8em;
margin: 5px;
  list-style: none;
display: inline-block;
  `
    const LiExtended = styled.li`
    color: black;
    font-size: .8em;
    list-style: none;
  
    `;

const Logo=styled.div`

min-width:33.3% ;
`;
const Ul=styled.ul`
@media (max-width: 700px){
  display: none;
}

`;
const Div2=styled.div`
display: flex;
min-width:33.3% ;
`;
const ExNavbar=styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width:700px){
  display: none;
}
`;

const Button=styled.button`
width: 70px;
height: 50px;
background: none;
color: black;
font-size: 45px;
cursor: pointer;
@media (min-width: 700px){
  display: none;
}

`;


export const Navbar=()=>{
const [extendNavbar,setExtendNavbar]=useState(false);
     return(
<Section extendNavbar={extendNavbar}>
    <Logo>
    </Logo>
    <Div2>
      <Ul>
    <Li><a href="">HOMEPAGINA</a></Li>
  <Li><a href="">DIENSTEN</a></Li>
  <Li><a href="">CONTACT</a></Li>
</Ul>
</Div2>
<Button onClick={()=>{
setExtendNavbar((curr)=>!curr)
}}> &#8801;</Button>
{ extendNavbar &&(
<ExNavbar>
<ul>
    <LiExtended><a href="">HOMEPAGINA</a></LiExtended>
  <LiExtended><a href="">DIENSTEN</a></LiExtended>
  <LiExtended><a href="">CONTACT</a></LiExtended>
</ul>
</ExNavbar>
)}



</Section>

     )

}