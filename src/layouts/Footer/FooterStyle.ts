import styled from "styled-components";



export const FooterContanier = styled.div `
  margin-top:5rem;
  background: ${(props) => props.theme['gray-800']};
  max-width: 100%;
  height: 6rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center; 
  color: ${(props) => props.theme['white']};;
  
  @media (max-width: 421px) {
    font-size: 14px;
  }
`