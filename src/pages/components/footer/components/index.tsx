"use client"

import { useState } from "react";
import AOSWrapper from "../../AOSWrapper";
import Swal from "sweetalert2";

interface ModalProps{
    isOpen?: boolean;
    onClose?: ()=>void;
}



export default function Modal({isOpen, onClose}: ModalProps){
    
    const [form, setForm] = useState({
        subject: '',
        html: '',
        from: '',
    })

     async function sendEmail(){
     try{
           fetch('/api/send', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                subject: form.subject,
                html: `${form.html} <br/> Email: "${form.from}"`,
             }),
            })
        Swal.fire({
            title:'Email enviado com sucesso!',
            icon:'success',
            showConfirmButton:false,
            timer:1300,

        })
     } catch(error){
        console.log(error)
        Swal.fire({
            title:'Erro ao enviar email',
            icon:'error',
            showConfirmButton:false,
            timer:1300,
        });
     }finally{
        onClose?.();
     }
    };
    
    if (!isOpen) return null

    
    return(
        <AOSWrapper>

    <div data-aos='zoom-in' data-aos-duration="600" className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm" onClick={onClose}/>
        <div className=" relative z-10 h-[80%] sm:h-full max-h-140 w-full max-w-100 min-w-100  bg-slate-300 p-6 border-1 border-slate-100 rounded-3xl" >
                <div className="mt-6 flex flex-col items-start gap-5">
                    <input
                    type="text"
                    placeholder="Digite seu Email"
                    value={form.from}
                    onChange={(e) => setForm({...form, from: e.target.value})}
                    className="
                    w-full px-4 py-2 rounded-lg border border-slate-100
             text-gray-900  bg-slate-400
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 transition-all"
                    />
                    <input
                    type="text"
                    placeholder="Assunto"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-100
             text-gray-900  bg-slate-400
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 transition-all"
                    />
                    <textarea
                    placeholder="Mensagem"
                    value={form.html}
                    onChange={(e) => setForm({...form, html: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-100
             text-gray-900  bg-slate-400
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 min-h-40 max-h-40 sm:min-h-70 sm:max-h-70 transition-all"
                    />
                </div>
                <div className="flex w-full justify-self-end min-h-30 justify-center">
            <button type='button' onClick={() => sendEmail()}
                className="absolute m-4  bottom-0 border-2 border-slate-200 w-1/2 h-15 cursor-pointer
                text-xl font-bold rounded-4xl
                hover:bg-slate-200 hover:mb-3
                hover:shadow-2xl/50 
                duration-200 ease-in
                hover:scale-105
                "
                >
                Enviar
            </button>

                </div>
        
        </div>

    </div>    
                    </AOSWrapper>
    )
}