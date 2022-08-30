import {  useState } from "react";
import { Hello, HomeContainer, HomeHeader, HomeMenu } from "./Homestyles";
import { TypewriterCard } from "../../components/TypeWriter";
import { ImageProfile } from "../../components/Image";
import { SkillProfile } from "../../components/Skill/Skill";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Projetcs } from "../../components/Projects/Projects";
import { SlideShow } from "../../components/SlideShow/SlideImage";
import { Concacts } from "../../components/Concacts/Contacts";
import { ContactShow } from "../../components/Concacts/ConcatcCard";
import { Footer } from "../../layouts/Footer/footer";



export function Home(){

  return (
    <HomeContainer>
        <HomeHeader>
          <h2>Jonathan Souza</h2>
        <HomeMenu>
         <span><a href="#aboutme">About Me</a></span>
         <span><a href="#aboutme">My Skills</a></span>
         <span><a href="#projects">My Portfolio</a></span>
         <span><a href="#contacts">Concact Me</a></span>
        </HomeMenu>
        </HomeHeader>
        <Hello>
        <TypewriterCard/>
        <span>
           <ImageProfile/> 
        </span> 
        <SkillProfile/>
        </Hello>
        <AboutMe/>
        <Projetcs/>
        <SlideShow/>  
        <Concacts/>
        <ContactShow/>
        <Footer/>
    </HomeContainer>
  )
}
