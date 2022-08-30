import styled, {css} from "styled-components";




export const AboutContainer = styled.div `
  display:  flex;
  grid-template-columns: 1fr 1fr;
  background: ${(props) => props.theme['gray-900']};
  color: white;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
 
  #id{
    scroll-behavior: smooth;
  }

`


export const AboutInfo = styled.div `
#aboutme{
  scroll-behavior: smooth;
}
    
  
  display:  flex;
  height: 32rem;
  gap: 2rem;
  width: 40rem;
  margin-bottom: 10rem;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme['gray-800']};
  color: white;
  margin-top: -3rem;
  padding: 1rem;
  border-radius: 1rem;
  filter: drop-shadow(8px 8px 5px rgba(0,255,0,.2));


  strong{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
  }
  strong span {
  color: ${(props) => props.theme['green-300']};
  font-size: 4rem;
  margin-top: -3rem;
  margin-left: -0.55rem;
  }
  
  span{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme['gray-300']};
  line-height: -10px;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: 'Roboto';
  font-size: 1.15rem;
  }
`

export const AboutText = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

export const SkillIco = styled.div`
ul{
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  list-style: none;
  flex-wrap: wrap;
  margin-top: 1rem;
}

li strong {
  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['green-500']};
  padding: 1px;
  border-radius: 5px;
  font-size: 15px;
}
  li:nth-child(1){
    display: flex;
    width: 40%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  li:nth-child(2){
    display: flex;
    width: 60%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  li:nth-child(3){
    display: flex;
    width: 50%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  li:nth-child(4){
    display: flex;
    width: 90%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  li:nth-child(5){
    display: flex;
    width: 95%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  li:nth-child(6){
    display: flex;
    width: 90%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  
  li:nth-child(7){
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  li:nth-child(8){
    display: flex;
    width: 90%;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme['gray-1000']};
    border-radius: 5px;
    padding: 4px;
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  }
  img{
    height: 2rem;
    
  }
`



export const SkillInfo = styled.div `
  filter: drop-shadow(8px 8px 5px rgba(0,255,0,.2));
  display:  grid;
  grid-template-columns: 1fr 1fr;
  height: 32rem;
  gap: 1rem;
  width: 40rem;
  margin-bottom: 10rem;
  background: ${(props) => props.theme['gray-800']};
  margin-top: -3rem;
  padding: 1rem;
  border-radius: 1rem;
  
  strong{
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    justify-content: center;
  }
  strong span {
  color: ${(props) => props.theme['green-300']};
  font-size: 4rem;
  margin-top: -3rem;
  margin-left: -0.55rem;
  }
  
  span{
  gap: 1rem;
  color: ${(props) => props.theme['gray-300']};
  line-height: -10px;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: 'Roboto';
  font-size: 1.15rem;
  }
`


export const SoftKils = styled.div `
  display:  grid; 
  height: 1rem;
  
  `
  export const SoftSkillContanier = styled.div `

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 2rem;
      background: ${(props) => props.theme['gray-1000']};
      filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
      border-radius: 1rem;
    }

    ul li{
      display: flex;
      gap: 5px;
      align-items: center;
      padding: 20px;
    }



  `
