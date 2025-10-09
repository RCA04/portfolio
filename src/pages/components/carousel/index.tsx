"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import AOSWrapper from "../AOSWrapper";



export default function Carousel(){
    
    const [repos, setRepos] = useState<any[]>([]);

    useEffect(()=>{

    (async () => {
        try{
            const res = await fetch("https://api.github.com/users/RCA04/repos")
            const data = await res.json();
            setRepos(data);
        }catch(error:any){
            console.error(error.message);
        }
    })()
    },[]);

    console.log(repos)

    
    return(
        <AOSWrapper>

        <div className="w-full h-full">
                <div className="flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold p-1">Projetos</h1>
                <span className="text-md mt-2 p-1 font-bold text-slate-600">os projetos sempre estão atualizados</span>
                </div>
            <div className="grid grid-cols-1 mt-20 sm:grid-cols-3" >
            {repos.map((i)=>{
                return(
                    
                    <div data-aos='zoom-out' data-aos-duration='600' className="flex left-0 flex-col m-5 p-3 border-1 border-slate-200 bg-slate-400 rounded-xl">
                   <p key={i.id}><strong>Nome: </strong>{i.name}</p>
                    <div className="flex my-2">
                    <p key={i.id}><strong>Descrição: </strong>{i.description}</p>
                    </div>
                    <div className="flex h-full items-end mt-2 ml-2">
                        <button className="border-1 border-slate-300 w-1/2 h-15 cursor-pointer
                 text-xl font-bold rounded-4xl
                 bg-slate-300
                 sm:bg-slate-400
                 sm:hover:bg-slate-300 
                 hover:shadow-2xl/50 
                 duration-200 ease-in
                 hover:scale-110
                 ">
                    <a key={i.id} href={i.html_url}>Ver</a>
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