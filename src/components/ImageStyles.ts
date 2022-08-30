import styled from "styled-components";


export const Image = styled.img`
 perspective: 1000; 
  border: 2px solid ${(props) => props.theme['green-500']};
margin-top: -5rem;
border-radius: 50%;


@media (max-width: 421px) {
    display: flex;
    justify-content: center;
    perspective: 1000; 
    height:15rem ;
    border: 2px solid ${(props) => props.theme['green-500']};
    margin-top: 2rem;
    margin-left: -2rem;
    border-radius: 50%;
  }

  

`