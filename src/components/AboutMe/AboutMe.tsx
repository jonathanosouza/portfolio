import { Brain, CalendarCheck, ChartBar, Code, CodeSimple, Medal, TerminalWindow, Translate, UsersThree } from "phosphor-react";
import {AboutText,SkillIco, AboutInfo, AboutContainer, SkillInfo, SoftKils, SoftSkillContanier } from "./AboutStyles";
import ScrollReveal from 'scrollreveal'
import react from './../../assets/react.png'
import js from './../../assets/js.png'
import python from './../../assets/python.ico'
import styled from './../../assets/styled.png'
import html from './../../assets/html.png'
import css from './../../assets/css.png'
import sql from './../../assets/sql.png'
import oracle from './../../assets/oracle.png'


export function AboutMe (){
    ScrollReveal().reveal('.headline', {
      delay: 500,
      duration: 500,
      reset: true
  });
    ScrollReveal().reveal('.AboutInfo', {delay : 1000})
    ScrollReveal().reveal('.SkillInfo', {delay : 1200})
    ScrollReveal().reveal('.SoftSkillContanier', {delay : 1500})
    ScrollReveal().reveal('.SkillIco', {delay : 1800})
    
  


  return (
    <AboutContainer className="headline">
  
      <AboutInfo id="aboutme">
        <strong> <TerminalWindow size={40} color = "#00B37E"/>About Me <span>_</span></strong>
        <span> 
        <AboutText  className="AboutInfo">
        8 anos de experiência na área de tecnologia dentre estes, passando por diversos níveis profissionais! Graduado em Análise e Desenvolvimento de Sistemas, com MBA em Gestão de Projetos. <p/>
        Hoje, atuo com Coordenador de TI voltado para a gestão de ERP e infraesturuta, mas atuamente estou estudando e me especializando para migrar à área de programação, com foco em FrontEnd para Web. <p/> Tenho rápida absorção de conteúdo colocando em prática já tudo que aprendo e sempre buscando a melhoria contínua em ter um código de qualidade! <p/>Tenho conhecimento intermediário com Python e suas bibliotecas, criação de DataFrames e modelagem de dados DW com ferramentas de ETLs.
         </AboutText>
        </span>
      </AboutInfo>
      <SkillInfo className="SkillInfo">
        <SkillIco  className="SoftSkillContanier">
        <strong> <Code size={40} color = "#00B37E"/>Hard Skills <span>_</span></strong>
            <ul>
              <li><img src={react} alt="" /> React <strong>40%</strong></li>
              <li><img src={js} alt="" /> JavaSrcipt <strong>60%</strong></li>
              <li><img src={python} alt="" />Python <strong>50%</strong></li>
              <li><img src={styled} alt="" />Styled Components <strong>90%</strong></li>
              <li><img src={html} alt="" />HTML <strong>95%</strong></li>
              <li><img src={css} alt="" />CSS <strong>90%</strong></li>
              <li><img src={oracle} alt="" />Oracle <strong>80%</strong></li>
              <li><img src={sql} alt="" />SQL <strong>90%</strong></li>
            </ul>
        </SkillIco>
        <SoftKils>
        <strong> <Code size={40} color = "#00B37E"/>Soft Skills <span>_</span></strong>
        <SoftSkillContanier className="SoftSkillContanier">
      
          <ul>
            <li><Brain size={35}/>Inteligencia Emocional</li>
            <li><ChartBar size={35}/>Aprendizado Rápido</li>
            <li><UsersThree size={35}/>Trabalho em equipe</li>
            <li><CalendarCheck size={25}/>Planejamento</li>
          </ul>
          <ul>
            <li><Translate size={35}/>Ingles Intermediário</li>
            <li><Translate size={35}/>Espanhol Intermediário</li>
          </ul>
          <ul>
            <li><Medal size={35}/>ITIL Fundation</li>
            <li><Medal size={35}/>Scrum Fundation</li>
          </ul>
        </SoftSkillContanier>
        </SoftKils>

      </SkillInfo>
  
    </AboutContainer>
  )
}