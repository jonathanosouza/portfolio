import styled from "styled-components";


export const ContactsContainer = styled.div `
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: center;

  strong{
    display: flex;
    gap: 1rem;
    font-size: 2.5rem;
    justify-content: center;
  color: ${(props) => props.theme['white']};

  }
  strong span {
  color: ${(props) => props.theme['green-300']};
  font-size: 4rem;
  margin-top: -2rem;
  font-family: 'Roboto';
  margin-left: -0.55rem;
  
  }

  span{
  gap: 1rem;
  color: ${(props) => props.theme['gray-300']};
  line-height: -10px;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-size: 1.15rem;
  }


  @media(max-width: 1093px) {
    margin-top: -10rem;
  }

  @media(max-width: 895px) {
    margin-top: -10rem;
  }

  @media(max-width: 680px) {
    margin-top: -10rem;
  }

  @media(max-width: 899px) {
    margin-top: 8rem;
  }
`