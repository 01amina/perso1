import styled from "styled-components";



export const Button = styled.button`

font-size: 18px;
  border: none;
  border-radius: 0.8em;
  padding: 0.8em 1.1em;
  background-color: var(--primary-color);

  svg {
    height: 1em;
    width: 1em;
    margin-right: 5px;
    transform: translateY(5px);
  }
  @media (min-width:760px){

    font-size: 22px;
  }

`;