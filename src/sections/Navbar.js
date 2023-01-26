import styled from "styled-components";
import { Li } from "@/Components/Li";

const Section = styled.section`
  padding: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
`;
const Bttn = styled.button`
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
const Input1 = styled.input`
  border: 1px solid #ddd;
  padding: 14px;
  height: 1.3em;
  width: 130px;
  font-size: 15px;
  background-color: #fff;
  color: #333;
  margin-left: 100px;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
`;
const Div1 = styled.div`
  min-width: 33.333%;
`;
const Div2 = styled.div`
  min-width: 33.333%;
`;
const Div3 = styled.div`
  position: relative;
  min-width: 33.333%;
`;
export const Navbar = () => {
  return (
    <Section>
      <Div1></Div1>
      <Div2>
        <ul>
          <Li>
            <a href="">HOMEPAGINA</a>
          </Li>
          <Li>
            <a href="">DIENSTEN</a>
          </Li>
          <Li>
            <a href="">CONTACT</a>
          </Li>
        </ul>
      </Div2>
      <Div3>
        <Input1 placeholder="Zoeken"></Input1>
        <Bttn></Bttn>
      </Div3>
    </Section>
  );
};
