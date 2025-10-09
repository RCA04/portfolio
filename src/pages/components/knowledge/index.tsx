"use client"

import { useState } from "react"
import { FaCss3, FaGitAlt, FaHtml5, FaLaravel, FaPhp, FaReact, FaYarn } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiComposer, SiEslint, SiJsonwebtokens, SiMui, SiPrettier, SiStyledcomponents } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IoGitBranchOutline } from "react-icons/io5";
import { ImNpm } from "react-icons/im";
import { FaUbuntu } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import AOSWrapper from "../AOSWrapper";

export default function  Knowledge(){

    const [desc, setDesc] = useState<string | null>(null)


    const descriptions: Record<string, string>={
      html:"Utilizo como base para React, Next, e Laravel, Php",
      css:"Utilizo como base para projetos e para bibliotecas como tailwind e styled components",
      javaScript:"utilizo como base para o React e Next, além de usar como alternativas grosseiras para soluções",
      reactjs:"Uso React para criar aplicações SPA(single page aplication)",
      nextjs:"Uso next para criar aplicações SPA(single page aplication), SSR(server side render), CSR(client side render) e gosto dele devido a perfomace que é fornecida",
      styledcomponents:"Gosto de utilizar StyledComponents quando vou ter componentes iguais em várias páginas devido ao seu fácil reaproveitamento",
      tailwind:"Utilizo Tailwind nas aplicações quando quero ter facilidade de tornar uma aplicação responsiva",
      mui:"Gosto de usar o Mui quando vou fazer uma aplicação que precisa de responsividade e padronização, poís ele facilita ter ambos",
      php:"Uso de base para Laravel quando vou fazer uma aplicação monolitica ou o back-end de outra aplicação",
      laravel:"Gosto de utilizar o laravel para fazer o back-end das aplicações, além dele base também uso junto ao Laravel:sanctum para realizar as autenticações",
      webtoken:"Sempre uso o JSON-Webtoken para fazer as autenticações amarzenado ele no localStorage",
      mysql:"Utilizo o MySQL para realizar as consultas de dados quando necessário no banco",
      git:"Utilizo o git para ter um controle maior sobre as versões do meu código",
      gitflow:"Complemento do git, que uso para ter um Controle ainda maior das versões além de um fluxo visual mais compreensível",
      npm:"Uso como padrão para gerenciar os pacotes das minha aplicações",
      yarn:"Uso quando necessido que o gerenciamento de pacotes seja mais veloz",
      composer:"Utilizo como gerenciador de dependências do PHP/Laravel",
      eslint:"Sempre antes de commitar um código utilizo o Eslint para ter um código mais limpo",
      prettier:"Uso normalmente proximo a conclusão de um projeto para deixa-lo mais légivel",
      ubuntu:"Uso o Ubuntu como sistema operacional padrão quando vou programar, gosto devido a sua leveza e facilidade de gerenciamento de configuracções do sistema.",
    };

    return(
      <AOSWrapper>

        <div>
        <div className="grid grid-cols-2 sm:grid-cols-7 mt-10 gap-20 text-5xl sm:text-7xl">
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='900' data-aos-duration='800' className=" w-35 h-30 z-40 sm:block  flex flex-col items-center justify-center">
            <button className="cursor-pointer" onClick={()=>setDesc(desc === "html" ? null : "html")}>
                <FaHtml5/>
            </button>
            {desc === "html" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.html}</p>}
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='950' data-aos-duration='800' className=" w-35 h-30 z-40 sm:block flex flex-col items-center justify-center">
            <button className="cursor-pointer" onClick={()=>setDesc(desc === "css" ? null : "css")}>
                <FaCss3/>
            </button>
            {desc === "css" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex text-ellipsis justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.css}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800'  className=" w-35 h-30 z-40 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "javaScript" ? null : "javaScript")}>
                <IoLogoJavascript/>
            </button>
            {desc === "javaScript" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out" 
             className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.javaScript}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1050' data-aos-duration='800' className=" w-35 h-30 z-40 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "reactjs" ? null : "reactjs")}>
                <FaReact/>
            </button>
            {desc === "reactjs" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.reactjs}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 z-40 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "nextjs" ? null : "nextjs")}>
                <RiNextjsLine/>
            </button>
            {desc === "nextjs" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out" data-aos-ffset='300' className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.nextjs}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1150' data-aos-duration='800' className=" w-35 h-30 z-40 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "styledcomponents" ? null : "styledcomponents")}>
                <SiStyledcomponents/>
            </button>
            {desc === "styledcomponents" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.styledcomponents}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1200' data-aos-duration='800' className=" w-35 h-30 z-40 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "tailwind" ? null : "tailwind")}>
                <RiTailwindCssFill/>
            </button>
            {desc === "tailwind" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.tailwind}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='900' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "mui" ? null : "mui")}>
                <SiMui/>
            </button>
            {desc === "mui" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.mui}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='950' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex flex-col items-center justify-center"> 
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "php" ? null : "php")}>
                <FaPhp/>
            </button>
            {desc === "php" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.php}</p>}
              
          </div>  
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "laravel" ? null : "laravel")}>
                <FaLaravel/>
            </button>
            {desc === "laravel" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.laravel}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1050' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "webtoken" ? null : "webtoken")}>
                <SiJsonwebtokens/>
            </button>
            {desc === "webtoken" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.webtoken}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "mysql" ? null : "mysql")}>
                <GrMysql/>
            </button>
            {desc === "mysql" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex flex-col justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.mysql}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1150' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "git" ? null : "git")}>
                <FaGitAlt/>
            </button>
            {desc === "git" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.git}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1200' data-aos-duration='800' className=" w-35 h-30 z-30 sm:block flex flex-col items-center justify-center">
            <button className="cursor-pointer" onClick={()=>setDesc(desc === "gitflow" ? null : "gitflow")}>
                <IoGitBranchOutline/>
            </button>
            {desc === "gitflow" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.gitflow}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='900' data-aos-duration='800' className=" w-35 h-30 z-20 sm:block flex flex-col items-center justify-center">
              <button className="cursor-pointer" onClick={()=>setDesc(desc === "npm" ? null : "npm")}>
                <ImNpm/>
            </button>
            {desc === "npm" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.npm}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='950' data-aos-duration='800' className=" w-35 h-30 z-20 sm:block flex flex-col items-center justify-center">
                        <button className="cursor-pointer" onClick={()=>setDesc(desc === "yarn" ? null : "yarn")}>
                <FaYarn/>
            </button>
            {desc === "yarn" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.yarn}</p>}
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800' className=" w-35 h-30 z-20 sm:block flex flex-col items-center justify-center">
            <button className="cursor-pointer" onClick={()=>setDesc(desc === "composer" ? null : "composer")}>
                <SiComposer/>
            </button>
            {desc === "composer" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex flex-col justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.composer}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1050' data-aos-duration='800' className=" w-35 h-30 z-20 sm:block flex flex-col items-center justify-center">
                        <button className="cursor-pointer" onClick={()=>setDesc(desc === "eslint" ? null : "eslint")}>
                <SiEslint/>
            </button>
            {desc === "eslint" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.eslint}</p>}
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 z-20 sm:block flex flex-col items-center justify-center">
                        <button className="cursor-pointer" onClick={()=>setDesc(desc === "prettier" ? null : "prettier")}>
                <SiPrettier/>
            </button>
            {desc === "prettier" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.prettier}</p>}
            
          </div>
          <div data-aos='flip-left'  data-aos-easing='ease-in' data-aos-delay='1150' data-aos-duration='800' className=" w-35 h-30 z-20 sm:block flex flex-col items-center justify-center">
                        <button className="cursor-pointer" onClick={()=>setDesc(desc === "ubuntu" ? null : "ubuntu")}>
                <FaUbuntu/>
            </button>
            {desc === "ubuntu" && <p data-aos='fade-left' data-aos-duration='300' data-aos-easing="ease-in-out"  className="flex justify-center text-sm font-bold items-center border-2 border-slate-300 bg-transparent rounded-2xl backdrop-blur-lg p-2">{descriptions.ubuntu}</p>}
          </div>
        </div>
        </div>
      </AOSWrapper>
    )
}