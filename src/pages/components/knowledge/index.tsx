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
        <div>
        <div className="grid grid-cols-7 mt-10 gap-30 text-7xl">
          <div>
            <button onClick={()=>setDesc(desc === "html" ? null : "html")}>
                <FaHtml5/>
            </button>
            {desc === "html" && <div>{descriptions.html}</div>}
          </div>
          <div>
            <button onClick={()=>setDesc(desc === "css" ? null : "css")}>
                <FaCss3/>
            </button>
            {desc === "css" && <div>{descriptions.css}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "javaScript" ? null : "javaScript")}>
                <IoLogoJavascript/>
            </button>
            {desc === "javaScript" && <div>{descriptions.javaScript}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "reactjs" ? null : "reactjs")}>
                <FaReact/>
            </button>
            {desc === "reactjs" && <div>{descriptions.reactjs}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "nextjs" ? null : "nextjs")}>
                <RiNextjsLine/>
            </button>
            {desc === "nextjs" && <div>{descriptions.nextjs}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "styledcomponents" ? null : "styledcomponents")}>
                <SiStyledcomponents/>
            </button>
            {desc === "styledcomponents" && <div>{descriptions.styledcomponents}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "tailwind" ? null : "tailwind")}>
                <RiTailwindCssFill/>
            </button>
            {desc === "tailwind" && <div>{descriptions.tailwind}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "mui" ? null : "mui")}>
                <SiMui/>
            </button>
            {desc === "mui" && <div>{descriptions.mui}</div>}
              
          </div>
          <div> 
                        <button onClick={()=>setDesc(desc === "php" ? null : "php")}>
                <FaPhp/>
            </button>
            {desc === "php" && <div>{descriptions.php}</div>}
              
          </div>  
          <div>
                        <button onClick={()=>setDesc(desc === "laravel" ? null : "laravel")}>
                <FaLaravel/>
            </button>
            {desc === "laravel" && <div>{descriptions.laravel}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "webtoken" ? null : "webtoken")}>
                <SiJsonwebtokens/>
            </button>
            {desc === "webtoken" && <div>{descriptions.webtoken}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "mysql" ? null : "mysql")}>
                <GrMysql/>
            </button>
            {desc === "mysql" && <div>{descriptions.mysql}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "git" ? null : "git")}>
                <FaGitAlt/>
            </button>
            {desc === "git" && <div>{descriptions.git}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "gitflow" ? null : "gitflow")}>
                <IoGitBranchOutline/>
            </button>
            {desc === "gitflow" && <div>{descriptions.gitflow}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "npm" ? null : "npm")}>
                <ImNpm/>
            </button>
            {desc === "npm" && <div>{descriptions.npm}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "yarn" ? null : "yarn")}>
                <FaYarn/>
            </button>
            {desc === "yarn" && <div>{descriptions.yarn}</div>}
              
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "composer" ? null : "composer")}>
                <SiComposer/>
            </button>
            {desc === "composer" && <div>{descriptions.composer}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "eslint" ? null : "eslint")}>
                <SiEslint/>
            </button>
            {desc === "eslint" && <div>{descriptions.eslint}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "prettier" ? null : "prettier")}>
                <SiPrettier/>
            </button>
            {desc === "prettier" && <div>{descriptions.prettier}</div>}
            
          </div>
          <div>
                        <button onClick={()=>setDesc(desc === "ubuntu" ? null : "ubuntu")}>
                <FaUbuntu/>
            </button>
            {desc === "ubuntu" && <div>{descriptions.ubuntu}</div>}
            
          </div>
        </div>
        
        
        
        
        </div>
    )



}