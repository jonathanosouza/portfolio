import styled from "styled-components";



export const TipeWriterTextUl = styled.ul `  
  list-style: none;
  height: 80px;
  background: ${(props) => props.theme['gray-900']};
  overflow: hidden;
  
  li{
    position: relative;
    top: 0;
    animation: slide 12s steps(4) infinite;
  }

  @keyframes slide {
   100%{
      top: -300px;
    }  
  }

strong{
  margin: 1rem;
  color: green;
}
span{
  color: white;
}


li::after {
  content: "";
  position: absolute;
  height: 100%;
  left: 0;
  background: ${(props) => props.theme['gray-900']};
  width: 100%;
  border-left: 2px solid  ${(props) => props.theme['white']};
  animation: typing 3s steps(14) infinite;
}

@keyframes typing {
  70%,
  60%{ left: calc(100% + 90px)}
  100%{
    left:0;
  }

}

`




export const TipeWriterContainer = styled.div `
  display: flex;
  gap: 1rem;

  strong:nth-child(1){
  color: ${(props) => props.theme['white']};

  }
  strong{
  color: ${(props) => props.theme['green-500']};
  }
  
  

`

