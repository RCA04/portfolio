"use client"

import { useEffect, useState } from "react";



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
        <div>

            {repos.map((i)=>{
                return <p key={i.id}>{i.html_url}</p>
            }
            )}

        </div>
    )
}