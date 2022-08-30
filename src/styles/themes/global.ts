import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #121214;

  }  
  
:focus{
  outline: 0;
  box-shadow: 0 0 0 2px #00875F;
}

  body, input, textarea , button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

  
  }


  `


