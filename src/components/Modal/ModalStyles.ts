import styled from "styled-components";


export const FormContainer = styled.div`
display: flex;
flex-direction: column;
/* background-image: url('https://files.tecnoblog.net/wp-content/uploads/2021/12/o-que-e-plataforma-low-code-chris-ried-unsplash.png'); */
background-repeat: no-repeat;
background-size: cover;
padding: 1rem;
opacity: 0.6;



`

export const FormInput = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
flex-direction: column;
height: 10rem;
color: ${(props) => props.theme['green-300']};
margin: 10rem;


input{ 
  height: 4rem;
  padding: 0.75rem;
  width: 30rem;
}

button{
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['white']};

}

button:hover{
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme['green-700']};
 

}

strong { 
  color: ${(props) => props.theme['white']};
}
`