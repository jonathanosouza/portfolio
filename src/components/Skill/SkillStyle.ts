import styled from "styled-components";


export const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -7rem;

  ul{
    display: flex;
    list-style: none;
    margin-left: 2rem;
    gap: 3rem
  }

 ul a{
    text-decoration: none;
    color: white;
  }

  ul a:hover{
    text-decoration: none;
    color: ${(props) => props.theme['green-300']};  
  }

  @media(max-width: 895px) {
  display: flex;
  flex-direction: row;
  margin-top: -10rem;
  justify-content: center;
  ul{
    display: flex;
    list-style: none;
    margin-left: -1rem;
    gap: 1rem;
    justify-content: center;
  }
   
  }

  @media(max-width: 421px) {
  display: flex;
  flex-direction: row;
  margin-top: 1px;
  justify-content: center;
  ul{
    display: flex;
    list-style: none;
    margin-left: 1rem;
    gap: 1rem;
    justify-content: center;
  }
   
  }
`