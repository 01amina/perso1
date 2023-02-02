import { useState } from "react";
import styled from "styled-components"


 const Section=styled.nav`
 padding: 30px;
 height: ${(props)=> (props.extendNavbar ? "100vh": "80px")};
 background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;

;`
const Logo=styled.img`

`;



export const Navbar=()=>{
     return(
<Section>
    <Logo>
    </Logo>
    


</Section>

     )

}