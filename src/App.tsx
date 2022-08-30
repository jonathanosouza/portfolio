import { defaultTheme } from "./styles/themes/defaulttheme";
import { GlobalStyle } from "./styles/themes/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { NameProvider } from "./components/Context/Context";


export function App() {
  
  return (
   <NameProvider>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
         <Router/>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
    </NameProvider>
   
  ) 
}
