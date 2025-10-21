"use client"

import { useEffect, useState } from "react";
import AOSWrapper from "../AOSWrapper";

interface RepoProps{
  id:number;
  name:string;
  description:string;
  html_url:string;
}

export default function Carousel(){
    
    const [repos, setRepos] = useState<RepoProps[]>([]);

    useEffect(()=>{

    (async () => {
        try{
            const res = await fetch("https://api.github.com/users/RCA04/repos")
            const data = await res.json();
            setRepos(data);
        }catch(error:unknown){
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            console.error(errorMessage);
        }
    })()
    },[]);


    
    return(
        <AOSWrapper>

        <div className="w-full h-full">
                <div className="flex justify-center items-center flex-col mb-8 sm:mb-12 lg:mb-16 px-4">
                <h1 data-aos="fade-down" data-aos-duration="500" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent text-center">
                    Projetos
                </h1>
                <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-slate-300 bg-purple-900/30 px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full border border-purple-500/30 text-center">
                    ✨ Lista de projeto integrados com a API do GitHub ✨
                </span>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4" >
            {repos.map((i)=>{
                return(
                    
                <div key={i.id} data-aos='fade-up' data-aos-duration='500' data-aos-delay={`${Math.random() * 300 + 300}`} className="group relative flex flex-col h-full bg-gradient-to-br from-purple-900/40 to-slate-800/40 backdrop-blur-sm border border-purple-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-slate-200 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400/60">
                    {/* Ícone decorativo */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex-grow">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                            {i.name}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                            {i.description ?? "Projeto sem descrição disponível"}
                        </p>
                    </div>
                    
                    <div className="mt-3 sm:mt-4 md:mt-6 pt-2 sm:pt-3 md:pt-4">
                        <a 
                            href={i.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-xs sm:text-sm md:text-base"
                        >
                            <span className="mr-1 sm:mr-2">👁️</span>
                            Ver Projeto
                        </a>
                    </div>    
                </div>
                )})
            }

            </div>
        </div>
                </AOSWrapper>
    )
}