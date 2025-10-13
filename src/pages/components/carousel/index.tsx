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
                <div className="flex justify-center items-center flex-col mb-16">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Projetos
                </h1>
                <span className="text-lg font-medium text-slate-300 bg-purple-900/30 px-6 py-2 rounded-full border border-purple-500/30">
                    ✨ Projetos sempre atualizados
                </span>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" >
            {repos.map((i)=>{
                return(
                    
                <div key={i.id} data-aos='zoom-out' data-aos-duration='600' className="group relative flex flex-col h-full bg-gradient-to-br from-purple-900/40 to-slate-800/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-slate-200 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400/60">
                    {/* Ícone decorativo */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                            {i.name}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {i.description ?? "Projeto sem descrição disponível"}
                        </p>
                    </div>
                    
                    <div className="mt-6 pt-4">
                        <a 
                            href={i.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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