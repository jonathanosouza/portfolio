import { useContext, useState } from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";
import {useName } from "../Context/Context";
import { FormContainer, FormInput } from "./ModalStyles";


export function ModalCard (){
 const {name, updateName} = useName()
  
  const [modalIsOpen, setModalIsOpen] = useState(true)
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background:'#121214',
    },
  };

  function closeModal(){
    setModalIsOpen(false)
  }
 

function handleOnChange  (event:any){
  event.preventDefault()
  const taskname = event.target.value
  const validado = taskname
    updateName(validado)

 
}


  const handleSubmit = (event : any) => {  
    event.preventDefault()
    setModalIsOpen(false)
    
  }
 
  return(
  
    <Modal
    isOpen={modalIsOpen}
    onRequestClose ={closeModal}
    contentLabel="Example Modal"
    style={customStyles}
    ariaHideApp={false}>
   
   
      <FormContainer>
        <FormInput onSubmit={handleSubmit} >
        <h1> Olá, Deixa eu te conhecer também?</h1> 
        <strong> Qual  é o seu nome?</strong> 
        <input placeholder="Digite seu Nome:" onChange={handleOnChange} type="text" />
      <Link to="home">  <button type="submit">Clique para me conhecer</button> </Link>
        </FormInput>
     
      </FormContainer>
    
     
    </Modal>

  )
}