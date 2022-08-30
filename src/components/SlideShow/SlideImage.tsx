import {  ArrowFatLeft, ArrowFatRight, ArrowLeft, HandPointing, StarFour } from 'phosphor-react';
import profile2 from '../../assets/wanessa.jpeg'
import profile from '../../assets/aguarde.png'
import { CartContainer, SlideButton, SlideCard, SlideContanier } from './SlideStyles';

export function SlideShow (){


      return (
        <SlideContanier>
         {/* <SlideButton><ArrowFatLeft size={32} /></SlideButton> */}
          <CartContainer>
            <SlideCard> 
              <img src={profile2} alt="" />
              <h3> Clinica Aldemir Carneiro</h3>
              <a href="https://www.clinicaaldemircarneiro.com.br/" target="_blank">
                <button><HandPointing size={20}/>Acessar Site</button>
              </a>
              {/* //<h3> <span>Deploy:</span> <a href=""> github.com</a></h3>  */}
            </SlideCard>
            <SlideCard> 
            <img src={profile} alt="" />
              <h3> Em Breve</h3>
              <a href="https://www.clinicaaldemircarneiro.com.br/" type='blank'>
                <button><HandPointing size={20}/>Acessar Site</button>
              </a>
              {/* <h3> <span>Deploy:</span> <a href=""> github.com</a></h3>
              <h3> <span>Deploy:</span> <a href=""> github.com</a></h3> */}
            </SlideCard>
           <SlideCard> 
           <img src={profile} alt="" />
              <h3> Em Breve</h3>
              <a href="https://www.clinicaaldemircarneiro.com.br/">
                <button><HandPointing size={20}/>Acessar Site</button>
              </a>
              {/* <h3> <span>Deploy:</span> <a href=""> github.com</a></h3>
              <h3> <span>Deploy:</span> <a href=""> github.com</a></h3> */}
            </SlideCard>
            <SlideCard> 
            <img src={profile} alt="" />
              <h3> Em Breve</h3>
              <a href="https://www.clinicaaldemircarneiro.com.br/">
                <button><HandPointing size={20}/>Acessar Site</button>
              </a>
              {/* <h3> <span>Deploy:</span> <a href=""> github.com</a></h3>
              <h3> <span>Deploy:</span> <a href=""> github.com</a></h3> */}
            </SlideCard>
            <SlideCard> 
              <img src={profile} alt="" />
              <h3> Em Breve</h3>
              <a href="https://www.clinicaaldemircarneiro.com.br/">
                <button><HandPointing size={20}/>Acessar Site</button>
              </a>
              {/* <h3> <span>Deploy:</span> <a href=""> github.com</a></h3>
              <h3> <span>Deploy:</span> <a href=""> github.com</a></h3> */}
            </SlideCard>
            
          </CartContainer>
          {/* <SlideButton><ArrowFatRight size={32} /></SlideButton> */}
        </SlideContanier>
      )
  
 
  }