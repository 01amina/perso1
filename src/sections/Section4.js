import styled from "styled-components";

const Section = styled.section`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  


`;
const Item = styled.div`
  display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url(${({ img }) => {
    return img;
  }});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  color: white;
  background-color: #2854ad;
  padding: 100px;
  min-width: 25%;
`;
const Title=styled.h2`
font-size: 22px;
font-weight: bold;
margin-bottom: 12px;

`;



const Div=styled.div`
font-size: 16px;
text-shadow: 1px 1px 2px black;
  

`;

export const Section4 = () => {
  return (
    <Section>

      <Item img='/images/sec1.jpeg'>
        <Div>
      <Title>Elektrotechniek</Title>
     </Div>
      </Item>
      <Item img='/images/sec2.jpeg'  >
      <Div>
      <Title>Groepenkast</Title>
      
        </Div>
         </Item>
      <Item img='/images/sec3.jpeg'>
        <Div>
      <Title>Kortsluiting</Title>
      </Div>
      </Item>
    
      <Item img='/images/sec4.jpeg'>
       <Div> <Title>Elektromonteur</Title>
      </Div>
      </Item>
      <Item img='/images/sec5.jpeg'>
    <Div> <Title>Elektra aanleggen</Title>
    </Div>
      </Item>
      <Item img='/images/sec6.jpeg'>
     <Div> <Title>Storingsdienst</Title>
     </Div>
      </Item>
      <Item img='/images/sec7.jpeg'>
     <Div> <Title>Krachtstroom
</Title>
    </Div>
      </Item>
      <Item img='/images/sec8.jpeg'>
      <Div><Title>Ander probleem?
</Title>
        
</Div>
      </Item>
    </Section>
  );
};
