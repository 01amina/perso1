import styled from "styled-components"


 const Section=styled.section`
 padding: 30px;
 background-color: white;
 display: flex;
 align-items: center;
 flex-flow: wrap;
 width: 100%;
 justify-content: center;

 `;
  const Li = styled.label`
  color: black;
  display: inline;
  margin-right: 20px;
  font-size: .8em;
  color: #555555;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  `;
 const Bttn= styled.button`
 padding: 13px;
 background-image: url(/images/Search.png);
 border: none;
 background-size: 17px;
 background-repeat: no-repeat;
 background-position: center;
 background-color: #ed1c24;
 padding-bottom: 9px;
 padding-top: 19px;
 `;
 const Input1=styled.input`
    border: 1px solid #ddd;
    padding: 14px;
    height: 1.3em;
    width: 130px;
  
    font-size: 15px;
    background-color: #fff;
    color: #333;
    
  
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
 `;
const Logo=styled.div`

min-width:33.333% ;
`;
const Div2=styled.div`

min-width:200px ;
`;
const Div3=styled.div`
position: relative;
min-width:33.333% ;
`;
const SearchBar=styled.div`
  float: right;
  min-width:100px;
  @media (max-width : 425px){
margin-top: 2vh;


  }
`;

export const Navbar=()=>{

     return(
<Section>
    <Logo>
    </Logo>
    <Div2>
      <ul>
    <Li><a href="">HOMEPAGINA</a></Li>
  <Li><a href="">DIENSTEN</a></Li>
  <Li><a href="">CONTACT</a></Li>
</ul>
</Div2>
    <Div3>
      <SearchBar>
      <Input1 placeholder="Zoeken" ></Input1>
  <Bttn></Bttn></SearchBar>
  </Div3>





</Section>

     )

}