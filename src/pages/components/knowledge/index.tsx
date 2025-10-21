"use client"

import { useState } from "react"
import { FaCss3, FaGitAlt, FaHtml5, FaLaravel, FaPhp, FaReact, FaWindows, FaYarn } from "react-icons/fa";
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
html: "Utilizo como base para projetos em React, Next e Laravel (PHP).",
css: "Utilizo como base para projetos e em conjunto com bibliotecas como Tailwind e Styled Components.",
javaScript: "Utilizo como base para React e Next, além de aplicá-lo em soluções alternativas quando necessário.",
reactjs: "Uso React para criar aplicações SPA (Single Page Application).",
nextjs: "Uso Next.js para criar aplicações SPA (Single Page Application), SSR (Server-Side Rendering) e CSR (Client-Side Rendering). Gosto dele pela performance que oferece.",
styledcomponents: "Gosto de utilizar Styled Components quando preciso reutilizar componentes em várias páginas, devido à sua facilidade de reaproveitamento.",
tailwind: "Utilizo Tailwind quando quero tornar uma aplicação responsiva de forma mais prática e rápida.",
mui: "Gosto de usar o MUI quando preciso de responsividade e padronização na interface, pois ele facilita alcançar ambos.",
php: "Uso PHP como base para Laravel, seja em aplicações monolíticas ou no back-end de outras aplicações.",
laravel: "Gosto de utilizar o Laravel para desenvolver o back-end das aplicações. Além disso, costumo usá-lo com o Laravel Sanctum para autenticação.",
webtoken: "Sempre utilizo JSON Web Token (JWT) para autenticação, armazenando o token no localStorage.",
mysql: "Utilizo MySQL para realizar consultas e manipulação de dados no banco de dados.",
git: "Utilizo Git para manter o controle de versões do meu código.",
gitflow: "Complemento o uso do Git com Git Flow, para ter um controle ainda maior das versões e um fluxo de trabalho mais organizado.",
npm: "Uso como padrão para gerenciar os pacotes das minhas aplicações.",
yarn: "Utilizo quando preciso de um gerenciamento de pacotes mais rápido.",
composer: "Utilizo como gerenciador de dependências do PHP e Laravel.",
eslint: "Sempre antes de realizar um commit, utilizo o ESLint para manter o código limpo e padronizado.",
prettier: "Costumo usar o Prettier próximo à conclusão de um projeto, para deixá-lo mais legível e organizado.",
ubuntu: "Uso o Ubuntu como sistema operacional padrão para programar, por ser leve e oferecer fácil gerenciamento de configurações.",
windows: "Uso o Windows como sistema operacional para o dia a dia. Apesar de não ser meu preferido para programar, ele oferece um manuseio de arquivos simples e prático."
};
    return(
      <AOSWrapper>

        <div className="max-w-full px-2 sm:px-4 lg:px-6 mt-6 sm:mt-10">
        <div className=" place-items-center gap-y-6 sm:gap-y-8 lg:gap-y-10 xl:gap-y-12 gap-x-2 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 mt-4 sm:mt-6 lg:mt-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-purple-300">

    <div id='frontend' data-aos="fade-up" data-aos-duration="500" className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 lg:mt-15 mb-8 sm:mb-12 lg:mb-15 gap-4 sm:gap-6">

        <div className="h-full w-full flex justify-center items-center">
        <p className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Front-end</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center w-full h-full gap-2 sm:gap-4 mt-2 sm:mt-0">

          <div className="w-full h-auto z-40 flex flex-col items-center justify-center gap-2 sm:gap-3">
          <button className="cursor-pointer p-2 sm:p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18" onClick={()=>setDesc(desc === "html" ? null : "html")}>
                  <FaHtml5 size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
            </button>
                  <span className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2 text-center">HTML5</span>
            <div className="w-full max-w-32 sm:max-w-36 min-h-12 sm:min-h-16 lg:min-h-18 flex items-start justify-center">
              {desc === "html" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-xs sm:text-sm lg:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-2 sm:px-3 py-1 sm:py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.html}
                </p>
              )}
            </div>
          </div>

            <div className="w-full h-auto z-40 flex flex-col items-center justify-center gap-2 sm:gap-3">
            <button className="cursor-pointer p-2 sm:p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18" onClick={()=>setDesc(desc === "css" ? null : "css")}>
                  <FaCss3 size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
              </button>
                  <span className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2 text-center">CSS3</span>
            <div className="w-full max-w-32 sm:max-w-36 min-h-12 sm:min-h-16 lg:min-h-18 flex items-start justify-center">
              {desc === "css" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-xs sm:text-sm lg:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-2 sm:px-3 py-1 sm:py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.css}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-40 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "javaScript" ? null : "javaScript")}>
                  <IoLogoJavascript size={40}/>
              </button>
                  <span className="text-base mb-2">JavaScript</span>
            <div className="w-full max-w-36 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "javaScript" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.javaScript}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-40 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "reactjs" ? null : "reactjs")}>
                  <FaReact size={40}/>
              </button>
                  <span className="text-base mb-2">ReactJS</span>
            <div className="w-full max-w-36 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "reactjs" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.reactjs}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-40 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "nextjs" ? null : "nextjs")}>
                  <RiNextjsLine size={40}/>
              </button>
                  <span className="text-base mt-1">NextJS</span>
            <div className="w-full max-w-36 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "nextjs" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.nextjs}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-40 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "styledcomponents" ? null : "styledcomponents")}>
                  <SiStyledcomponents size={40}/>
              </button>
                  <span className="text-base mt-1  truncate overflow-visible">Styled Components</span>
            <div className="w-full max-w-36 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "styledcomponents" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.styledcomponents}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-40 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "tailwind" ? null : "tailwind")}>
                  <RiTailwindCssFill size={40}/>
              </button>
                  <span className="text-base mt-1">Tailwind CSS</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "tailwind" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.tailwind}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "mui" ? null : "mui")}>
                  <SiMui size={40}/>
              </button>
                  <span className="text-base mt-1">Material UI</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "mui" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.mui}
                </p>
              )}
            </div>
            </div>

    </div>

    </div>

    <div id='backend' data-aos="fade-up" data-aos-duration="500" className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 lg:mt-15 mb-8 sm:mb-12 lg:mb-15 gap-4 sm:gap-6">

        <div className="h-full w-full flex justify-center items-center">
        <p className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Back-end</p>
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center w-full h-full gap-2 sm:gap-4 mt-2 sm:mt-0">

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "php" ? null : "php")}>
                  <FaPhp size={40}/>
              </button>
                  <span className="text-base mt-1">PHP</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "php" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.php}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "laravel" ? null : "laravel")}>
                  <FaLaravel size={40}/>
              </button>
                  <span className="text-base mt-1">Laravel</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "laravel" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.laravel}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "webtoken" ? null : "webtoken")}>
                  <SiJsonwebtokens size={40}/>
              </button>
                  <span className="text-base mt-1">JWT</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "webtoken" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.webtoken}
                </p>
              )}
            </div>
            </div>

     </div>
    </div>

    <div id="ferramentas" data-aos="fade-up" data-aos-duration="500" className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 lg:mt-15 mb-8 sm:mb-12 lg:mb-15 gap-4 sm:gap-6">

      <div className="h-full w-full flex justify-center items-center">
        <p className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Ferramentas</p>
       </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center w-full h-full gap-2 sm:gap-4 mt-2 sm:mt-0">

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "mysql" ? null : "mysql")}>
                  <GrMysql size={40}/>
              </button>
                  <span className="text-base mb-2">MySQL</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "mysql" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.mysql}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "git" ? null : "git")}>
                  <FaGitAlt size={40}/>
              </button>
                  <span className="text-base mb-2">Git</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "git" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.git}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-30 flex flex-col items-center justify-center gap-2">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "gitflow" ? null : "gitflow")}>
                  <IoGitBranchOutline size={40}/>
              </button>
                  <span className="text-base mb-2">GitFlow</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "gitflow" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.gitflow}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
                <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "npm" ? null : "npm")}>
                  <ImNpm size={40}/>
              </button>
                  <span className="text-base mb-2">NPM</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "npm" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.npm}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "yarn" ? null : "yarn")}>
                  <FaYarn size={40}/>
              </button>
                  <span className="text-base mt-1">Yarn</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "yarn" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.yarn}
                </p>
              )}
            </div>   
            </div>

            <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "composer" ? null : "composer")}>
                  <SiComposer size={40}/>
              </button>
                  <span className="text-base mt-1">Composer</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "composer" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.composer}
                </p>
              )}
            </div>
            </div>

          <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "eslint" ? null : "eslint")}>
                  <SiEslint size={40}/>
              </button>
                  <span className="text-base mt-1">ESLint</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "eslint" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.eslint}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "prettier" ? null : "prettier")}>
                  <SiPrettier size={40}/>
              </button>
                  <span className="text-base mt-1">Prettier</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "prettier" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.prettier}
                </p>
              )}
            </div>
            </div>
      </div>
    </div>


    <div id="sistemas" data-aos="fade-up" data-aos-duration="500" className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 lg:mt-15 mb-8 sm:mb-12 lg:mb-15 gap-4 sm:gap-6">

      <div className="h-full w-full flex justify-center items-center">
        <p className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">OSs</p>
      </div>


      <div className="grid grid-cols-2 items-center justify-center w-full h-full gap-2 sm:gap-4 mt-2 sm:mt-0">

            <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
                        <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "ubuntu" ? null : "ubuntu")}>
                  <FaUbuntu size={40}/>
              </button>
                  <span className="text-base mt-1">Ubuntu</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "ubuntu" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.ubuntu}
                </p>
              )}
            </div>
            </div>

            <div className="w-35 h-30 z-20 flex flex-col items-center justify-center gap-2">
              <button className="cursor-pointer p-3 rounded-xl bg-purple-900/20 hover:bg-purple-800/30 ring-1 ring-purple-500/20 hover:ring-purple-400/40 transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18" onClick={()=>setDesc(desc === "windows" ? null : "windows")}>
                  <FaWindows size={40}/>
              </button>
                  <span className="text-base mt-1">Windows</span>
            <div className="w-full max-w-72 min-h-16 sm:min-h-18 flex items-start justify-center">
              {desc === "windows" && (
                <p
                  data-aos='fade-left'
                  data-aos-duration='300'
                  data-aos-easing="ease-in-out"
                  className="flex text-ellipsis justify-center text-sm sm:text-base font-bold items-center border-2 border-purple-500/60 bg-purple-900/20 rounded-2xl backdrop-blur-lg px-3 py-2 text-slate-200 shadow-lg shadow-purple-900/30 break-words text-center"
                >
                  {descriptions.windows}
                </p>
              )}
            </div>
            </div>
      </div>

    </div>

          </div>
          </div>
        </AOSWrapper>
      )
    }