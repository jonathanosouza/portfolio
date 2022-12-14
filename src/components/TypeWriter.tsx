
import { useName } from "./Context";
import Typewriter from 'typewriter-effect'
import { TipeWriterContainer } from "./TypeStyles";

export function TypewriterCard() {  

  const {name}= useName()

return(
 
    <TipeWriterContainer>
      <Typewriter
         onInit={(typewriter)=> {
         typewriter
        .typeString("Hello" +  `<strong style="color:#00B37E"> ${name}</strong>`)
        .pauseFor(1000)
        .start()
        
         }
        }
         />

        <Typewriter
        onInit={(typewriter)=> {
         typewriter
         .pauseFor(800)
         .typeString("I'm  <strong style=color:#00B37E> Jonathan Souza</strong>").stop()
         .pauseFor(50)
         .deleteChars(14)
         .typeString("<strong style=color:#00B37E> Web Developer</strong>")
         .start();
         }}
         /> 
          </TipeWriterContainer>

)
}

