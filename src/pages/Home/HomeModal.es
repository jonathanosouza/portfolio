import {  useState } from "react";
import { Hello, HomeContainer, HomeHeader, HomeMenu } from "./Homestyles";
import { TypewriterCard } from "../../components/TypeWriter";
import { ImageProfile } from "../../components/Image";
import { SkillProfile } from "../../components/Skill/Skill";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import {useName} from '../../components/Context'
import { Projetcs } from "../../components/Projects/Projects";
import { ModalCard } from "../../components/Modal/Modal";


export function HomeModal(){

  return (
    <HomeContainer>
        <HomeHeader>
          <h2>Jonathan Souza</h2>
        <HomeMenu>
           <span>About Me</span>
           <span>My Portfolio</span>
           <span>My Skills</span>
           <span>Concact Me</span>
        </HomeMenu>
        </HomeHeader>
        <Hello>
        <ModalCard/>
        <TypewriterCard/>
        <span>
           <ImageProfile/> 
        </span> 
        <SkillProfile/>
        </Hello>
        <AboutMe/>
        <Projetcs/>
    </HomeContainer>
  )
}
