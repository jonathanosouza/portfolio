import styled from "styled-components";

export const SlideContanier = styled.div `
display: flex;
max-width: 100vw;
height: 30rem;
margin-top:-6rem;
gap: 2rem;
justify-content: center;
padding:2rem;


`


export const SlideCard = styled.div `

display: flex;
width: 15rem;
height: 20rem;
border-radius: 1rem;
justify-content: center;
align-items: center;
flex: none;
flex-direction: column;
background: ${(props) => props.theme['gray-700']};
gap: 1rem;

h3{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['white']};
}

h3 span {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['white']};
}

img{
  padding: 1rem;
  width: 16rem;
  height: 12rem;
  margin-top: -3rem;
  border-radius: 12%
}

a{ 
  text-decoration: none;
}
button{
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 4px;
  width: 8rem;
  border-radius: 1rem;
  padding: 0.65rem;
  font-size: 14px;
  border: none;
  background:${(props) => props.theme['green-500']};
  color:${(props) => props.theme['white']}
}

button:hover{
  background:${(props) => props.theme['green-300']};
}


`

export const CartContainer = styled.div `
display: flex;
width:100%;
height: 25rem;
background: ${(props) => props.theme['gray-900']};
gap: 1rem;
justify-content: center;
padding:2rem;

@media(max-width: 1093px) {
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const SlideButton = styled.div `
display: flex;
color: white;
justify-content: center;
align-items: center;
`
