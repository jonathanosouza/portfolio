import styled, {keyframes} from "styled-components";


export const HomeContainer = styled.div`
background: ${(props) => props.theme['gray-900']};
width: 100wh;
height:100vh;

`

export const HomeHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
color: ${(props) => props.theme['white']};
padding: 1rem;


@media (max-width: 421px) {
    display: flex;
    flex-direction: column;
    
  }





`


export const HomeMenu = styled.div`
display: flex;
gap: 4rem;
justify-content: center;
align-items: center;
padding: 1rem;


a{
  text-decoration: none;
  color: white;
}

span:hover:nth-child(2){
  background: ${(props) => props.theme['green-300']};
  padding: 10px;
  transition: 0.3s;
  border-radius: 1rem;
  transition: 0.2s;
  cursor: pointer;
}
span:hover:nth-child(3){
  background: ${(props) => props.theme['green-300']};
  padding: 10px;
  transition: 0.3s;
  border-radius: 1rem;
  transition: 0.2s;
  cursor: pointer;
}

span:first-child{
color: ${(props) => props.theme['green-300']}; ;
  padding: 10px;
  transition: 0.3s;
}

span:hover:first-child{
  /* background: ${(props) => props.theme['green-500']}; */
  color: ${(props) => props.theme['green-700']}; ;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
  position: fix;
}

span:last-child{
  background: ${(props) => props.theme['green-500']};
  padding: 10px;
  transition: 0.3s;
  border-radius: 1rem;
}


span:hover:last-child{
  background: ${(props) => props.theme['green-300']};
  padding: 10px;
  transition: 0.3s;
  border-radius: 1rem;
  transition: 0.3s;
  cursor: pointer;
}



@media (max-width: 421px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }


`

export const Hello = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
color: ${(props) => props.theme['white']};
font-family: 'Baloo';
padding: 8rem;
font-size: 4rem;

@media (max-width: 1074px) {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    justify-content: center;
    
  }

@media (max-width: 421px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  
  }
  


`


