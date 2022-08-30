import styled from "styled-components";




export const TipeWriterContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media(max-width: 421px) {
    font-size: 2rem;
    position: absolute;
    display: flex;
    margin-left: -4rem;
    width: 100%;
    flex-wrap: nowrap;
    margin-bottom: 30rem;
   
  }
`

