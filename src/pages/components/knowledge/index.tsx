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

        <div className="max-w-190 xl:max-w-full px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 place-items-center gap-y-6 sm:gap-y-8 lg:gap-y-10 xl:gap-y-12 gap-x-4 sm:gap-x-6 lg:gap-x-8 xl:gap-x-10 mt-8 sm:mt-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-purple-300">
        <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800'  className=" w-35 h-30 z-40 flex flex-col items-center justify-center gap-3">
        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "html" ? null : "html")}>
                <FaHtml5/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "html" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.html}
                </p>
              )}
            </div>
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800'  className=" w-35 h-30 z-40 flex flex-col items-center justify-center gap-3">
          <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "css" ? null : "css")}>
                <FaCss3/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "css" && (
                <p
                data-aos='fade-left'
                data-aos-duration='300'
                data-aos-easing="ease-in-out"
                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
              >
                  {descriptions.css}
                </p>
              )}
            </div>
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800'  className=" w-35 h-30 z-40 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "javaScript" ? null : "javaScript")}>
                <IoLogoJavascript/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "javaScript" && (
                <p
                data-aos='fade-left'
                data-aos-duration='300'
                data-aos-easing="ease-in-out"
                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
              >{descriptions.javaScript}</p>
              )}
            </div>
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1050' data-aos-duration='800' className=" w-35 h-30 z-40 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "reactjs" ? null : "reactjs")}>
                <FaReact/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "reactjs" && (
                              <p
                              data-aos='fade-left'
                              data-aos-duration='300'
                              data-aos-easing="ease-in-out"
                              className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                            >{descriptions.reactjs}</p>
              )}
            </div>
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 z-40 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "nextjs" ? null : "nextjs")}>
                <RiNextjsLine/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "nextjs" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.nextjs}</p>
              )}
            </div>
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1150' data-aos-duration='800' className=" w-35 h-30 md:z-30 z-40 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "styledcomponents" ? null : "styledcomponents")}>
                <SiStyledcomponents/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "styledcomponents" && (
                               <p
                               data-aos='fade-left'
                               data-aos-duration='300'
                               data-aos-easing="ease-in-out"
                               className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                             >{descriptions.styledcomponents}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1200' data-aos-duration='800' className=" w-35 h-30 md:z-30 z-40 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "tailwind" ? null : "tailwind")}>
                <RiTailwindCssFill/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "tailwind" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.tailwind}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='900' data-aos-duration='800' className=" w-35 h-30 z-30 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "mui" ? null : "mui")}>
                <SiMui/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "mui" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.mui}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 z-30 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "php" ? null : "php")}>
                <FaPhp/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "php" && (
                               <p
                               data-aos='fade-left'
                               data-aos-duration='300'
                               data-aos-easing="ease-in-out"
                               className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                             >{descriptions.php}</p>
              )}
            </div>
              
          </div>  
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800' className=" w-35 h-30 z-30 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "laravel" ? null : "laravel")}>
                <FaLaravel/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "laravel" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.laravel}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1050' data-aos-duration='800' className=" w-35 h-30 md:z-20 z-30 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "webtoken" ? null : "webtoken")}>
                <SiJsonwebtokens/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "webtoken" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.webtoken}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 md:z-20 z-30 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "mysql" ? null : "mysql")}>
                <GrMysql/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "mysql" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.mysql}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1150' data-aos-duration='800' className=" w-35 h-30 md:z-20 z-30 flex flex-col items-center justify-center gap-3">
            <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "git" ? null : "git")}>
                <FaGitAlt/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "git" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.git}</p>
              )}
            </div>
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1200' data-aos-duration='800' className=" w-35 h-30 md:z-20 z-30 flex flex-col items-center justify-center gap-3">
            <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "gitflow" ? null : "gitflow")}>
                <IoGitBranchOutline/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "gitflow" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.gitflow}</p>
              )}
            </div>
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='900' data-aos-duration='800' className=" w-35 h-30 z-20 flex flex-col items-center justify-center gap-3">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "npm" ? null : "npm")}>
                <ImNpm/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "npm" && (
                               <p
                               data-aos='fade-left'
                               data-aos-duration='300'
                               data-aos-easing="ease-in-out"
                               className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                             >{descriptions.npm}</p>
              )}
            </div>
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='950' data-aos-duration='800' className=" w-35 h-30 md:z-10 z-20 flex flex-col items-center justify-center gap-3">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "yarn" ? null : "yarn")}>
                <FaYarn/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "yarn" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.yarn}</p>
              )}
            </div>
              
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1000' data-aos-duration='800' className=" w-35 h-30 md:z-10 z-20 flex flex-col items-center justify-center gap-3">
            <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "composer" ? null : "composer")}>
                <SiComposer/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "composer" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.composer}</p>
              )}
            </div>
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1050' data-aos-duration='800' className=" w-35 h-30 md:z-10 z-20 flex flex-col items-center justify-center gap-3">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "eslint" ? null : "eslint")}>
                <SiEslint/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "eslint" && (
                                <p
                                data-aos='fade-left'
                                data-aos-duration='300'
                                data-aos-easing="ease-in-out"
                                className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                              >{descriptions.eslint}</p>
              )}
            </div>
            
          </div>
          <div data-aos='flip-left' data-aos-easing="ease-in-out" data-aos-delay='1100' data-aos-duration='800' className=" w-35 h-30 md:z-10 z-20 flex flex-col items-center justify-center gap-3">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "prettier" ? null : "prettier")}>
                <SiPrettier/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "prettier" && (
                               <p
                               data-aos='fade-left'
                               data-aos-duration='300'
                               data-aos-easing="ease-in-out"
                               className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                             >{descriptions.prettier}</p>
              )}
            </div>
            
          </div>
          <div data-aos='flip-left'  data-aos-easing='ease-in' data-aos-delay='1150' data-aos-duration='800' className=" w-35 h-30 md:z-10 z-20 flex flex-col items-center justify-center gap-3">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105" onClick={()=>setDesc(desc === "ubuntu" ? null : "ubuntu")}>
                <FaUbuntu/>
            </button>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "ubuntu" && (
                               <p
                               data-aos='fade-left'
                               data-aos-duration='300'
                               data-aos-easing="ease-in-out"
                               className="flex justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                             >{descriptions.ubuntu}</p>
              )}
            </div>
          </div>
        </div>
        </div>
      </AOSWrapper>
    )
}