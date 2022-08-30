import styled from "styled-components";

export const SlideContanier = styled.div `
display: flex;
align-items: center;
background: ${(props) => props.theme['gray-900']};
justify-content: center;
margin-top: -4rem;

@media(max-width: 421px) {
  display: flex;
  flex-direction: column;
}
`


export const SlideCard = styled.div `
display: flex;
width: 25rem;
height: 32rem;
border-radius: 1rem;
padding: 6px;
text-align: center;
align-items: center;
flex: none;
flex-direction: column;
border: 1px solid  ${(props) => props.theme['green-500']};

gap: 2rem;

h3{
  display: flex;
  font-size: 2rem;
  align-items: center;
  color: ${(props) => props.theme['green-500']};
}

ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  color: ${(props) => props.theme['white']};

}

ul li:nth-child(1) {
  margin-bottom: 1rem;
}

img{
  background: white;
  width: 12rem;
  height: 10rem;
  border-radius: 50%;
  border: 7px solid ${(props) => props.theme['green-500']}
}

button{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  gap: 10px;
  border-radius: 1rem;
  padding: 0.65rem;
  font-size: 14px;
  border: none;
  background:${(props) => props.theme['green-500']};
  color:${(props) => props.theme['white']}
}

a{
  text-decoration: none;
}

button:hover{
  background:${(props) => props.theme['green-300']};
}

input{
  padding:0.2rem;

}


@media(max-width: 421px) {
  width: 20rem;
  height: 35rem;
}
`

export const CartContainer = styled.div `
display: flex;
width:100%;
width: 30rem;
align-items: center;
justify-content: center;
`

export const SlideButton = styled.div `
display: flex;
color: white;
justify-content: center;
align-items: center;
`

export const ConcatsCardContainer = styled.div `
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme['green-500']};
  }



`
export const CartInputContact = styled.div `
display: flex;
justify-content: center;
padding:2rem;




`


export const InputCart = styled.form `
display: flex;
margin-top: 1rem;
width: 40rem;
height: 30rem;
border-radius: 1rem;
padding: 1rem;
align-items: center;
flex-direction: column;
border: 1px solid ${(props) => props.theme['gray-500']};
gap: 2rem;
border-radius: 1rem;

h2{
color: ${(props) => props.theme['white']};

}

input {
  width: 80%;
  justify-content: center;
  padding: 5px;
  border-radius: 6px;

}

textarea {
  width: 80%;
  padding: 5px;
  height: 10rem;
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


@media(max-width: 421px) {
  width: 25rem;
  height: 30rem;
}
`


