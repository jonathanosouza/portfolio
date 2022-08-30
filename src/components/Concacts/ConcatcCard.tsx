import {  ArrowFatLeft, ArrowFatRight, ArrowLeft, Download, DownloadSimple, EnvelopeOpen, FolderMinus, GitlabLogoSimple, LinkedinLogo, SortDescending, WhatsappLogo } from 'phosphor-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import profile from '../../assets/profile2.png';
import cv from '../../assets/JONATHANSOUZA_CV.pdf';
import Modal from "react-modal";
import { CartContainer, CartInputContact, ConcatsCardContainer, InputCart, SlideButton, SlideCard, SlideContanier } from './ContactCartStyles';
import emailjs from '@emailjs/browser';


export function ContactShow (){

    const {register, handleSubmit} = useForm();
    const [mesage, setMesage] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const customStyles = {
        content: {
        top: '78%',
        left: '30%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-80%',
        transform: 'translate(-50%, -50%)',
        background: "#008000",
        color: "#ffff"
      },
                            };

  function closeModal(){
    setModalIsOpen(false)
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMesage', 'template_13hyu97', form.current, '0emZEu0w3-bvJtyhj')
      .then((result) => {
          setModalIsOpen(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  //  function onSubmit (data){
  //   setMesage(data)
  //   emailjs.sendForm('gmailMesage', 'template_13hyu97', data, '0emZEu0w3-bvJtyhj')
  //     .then((result) => {
  //       setModalIsOpen(true)
  //     }, (error) => {
  //       setModalIsOpen(true)
  //     });
  //  }

      return (
        <SlideContanier>
         {/* <SlideButton><ArrowFatLeft size={32} /></SlideButton> */}
          <CartInputContact>
            <InputCart ref={form} onSubmit={sendEmail}> 
             <h2>Entre em Contato</h2>
              <input 
                type="text" 
                {...register("nome")}    
                placeholder='Nome' />
              <input 
                type="text" 
                {...register("email")} 
                placeholder='Email' />
              <input 
                type="text" 
                {...register("assunto")} 
                placeholder='Assunto'/>
              <textarea 
         
              {...register("message")} 
              placeholder='Mensagem'/>
              <button type='submit'><SortDescending size={20}/>Enviar</button>
              <Modal
            isOpen={modalIsOpen}
            onRequestClose ={closeModal}
            contentLabel="Example Modal"
           style={customStyles}
            ariaHideApp={false}>

                <div><h4>Mensagen Enviada <button onClick={() => setModalIsOpen(false)}>x</button></h4></div>
                
            </Modal>
   
            </InputCart>
            
          </CartInputContact>

          <CartContainer>
            <SlideCard> 
              <img src={profile} alt="" />
              <h3>Jonathan Souza</h3>
                <ul>
                  <li>Graduado em Análise e Desenvolvimento de Sistemas</li>
                  <li>Pós Graduado em Gestão de Projetos e Processos</li>
                </ul>
              <ConcatsCardContainer>
                <ul>
                  <a 
                  href="https://github.com/jonathanosouza" 
                  target="_blank">
                    <li><GitlabLogoSimple size={40}/></li>
                 </a>
                  <a 
                  href="https://www.linkedin.com/in/jonathanosouzafh/"
                  target="_blank">
                    <li><LinkedinLogo size={40}/></li>
                  </a> 
                  <a 
                  href='wa.me/558591368177' 
                  target="_blank">
                    <li><WhatsappLogo size={40}/></li>
                  </a>
                  <a 
                  href="mailto:jonathanosouza@gmail.com"
                  target="_blank">
                    <li><EnvelopeOpen size={40}/></li>
                  </a>
                </ul>

                <a href={cv} download ="JONATHANSOUZA_CV.pdf"><button><DownloadSimple size={20}/>Baixar Currículo</button></a>
             </ConcatsCardContainer>
            </SlideCard>

          </CartContainer>
          {/* <SlideButton><ArrowFatRight size={32} /></SlideButton> */}
        </SlideContanier>
      )
  
 
  }