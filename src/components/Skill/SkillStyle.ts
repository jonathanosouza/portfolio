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
`