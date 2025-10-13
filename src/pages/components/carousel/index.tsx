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
                <div className="flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold p-1 text-purple-300">Projetos</h1>
                <span className="text-md mt-2 p-1 font-bold text-slate-300">os projetos sempre estão atualizados</span>
                </div>
            <div className="grid grid-cols-1 mt-20 sm:grid-cols-3" >
            {repos.map((i)=>{
                return(
                    
                <div key={i.id} data-aos='zoom-out' data-aos-duration='600' className="flex left-0 flex-col m-5 p-3 border-1 border-purple-500/60 bg-purple-900/30 rounded-xl text-slate-200">
                   <p><strong>Nome: </strong>{i.name}</p>
                    <div className="flex my-2">
                    <p ><strong>Descrição: </strong>{i.description ?? "Sem descriçao"}</p>
                    </div>
                    <div className="flex h-full items-end mt-2 ml-2">
                        <button className="border-1 border-purple-500/60 w-1/2 h-15 cursor-pointer
                 text-xl font-bold rounded-4xl
                 bg-purple-900/30
                 sm:bg-purple-800/30
                 sm:hover:bg-purple-800/50 
                 hover:shadow-2xl/50 
                 duration-200 ease-in
                 hover:scale-110
                 ">
                    <a href={i.html_url}>Ver</a>
                        </button>
                    </div>    
                </div>
                )})
            }

            </div>
        </div>
                </AOSWrapper>
    )
}