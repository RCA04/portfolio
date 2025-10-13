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
                <div className="flex justify-center items-center flex-col mb-12 sm:mb-16 px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
                    Projetos
                </h1>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-slate-300 bg-purple-900/30 px-4 sm:px-6 py-2 rounded-full border border-purple-500/30 text-center">
                    ✨ Projetos sempre atualizados
                </span>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4" >
            {repos.map((i)=>{
                return(
                    
                <div key={i.id} data-aos='zoom-out' data-aos-duration='600' className="group relative flex flex-col h-full bg-gradient-to-br from-purple-900/40 to-slate-800/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-6 text-slate-200 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400/60">
                    {/* Ícone decorativo */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                            {i.name}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            {i.description ?? "Projeto sem descrição disponível"}
                        </p>
                    </div>
                    
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4">
                        <a 
                            href={i.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                        >
                            <span className="mr-2">👁️</span>
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