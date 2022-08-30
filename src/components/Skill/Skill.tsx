import { SkillContainer } from './SkillStyle'
import {EnvelopeOpen, GitlabLogoSimple, LinkedinLogo, WhatsappLogo} from 'phosphor-react'

export function SkillProfile (){
  return (
    <SkillContainer>
                <ul>
                  <a 
                  href="https://github.com/jonathanosouza" 
                  target="_blank">
                    <li><GitlabLogoSimple /></li>
                 </a>
                  <a 
                  href="https://www.linkedin.com/in/jonathanosouzafh/"
                  target="_blank">
                    <li><LinkedinLogo/></li>
                  </a> 
                  <a 
                  href='https://wa.me/558591368177' 
                  target="_blank">
                    <li><WhatsappLogo /></li>
                  </a>
                  <a 
                  href="mailto:jonathanosouza@gmail.com"
                  target="_blank">
                    <li><EnvelopeOpen/></li>
                  </a>
                </ul>
    </SkillContainer>

  )
}