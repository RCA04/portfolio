"use client"

import { useState } from "react";
import AOSWrapper from "../../AOSWrapper";

interface ModalProps{
    isOpen?: boolean;
    onClose?: ()=>void;
}



export default function Modal({isOpen, onClose}: ModalProps){
    if (!isOpen) return null
    async function sendEmail(){
     try{
         const response = await fetch('/api/send', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                subject: form.subject,
                html: `${form.html} <br/> Email: "${form.from}"`,
             }),
            })
        const data = await response.json();
        console.log('Email enviado:', data);
     } catch(error){
        console.error('Erro ao enviar email:', error);
     }finally{
        onClose?.();
     }
    };
    
    const [form, setForm] = useState({
        subject: '',
        html: '',
        from: '',
    })
    
    return(
        <AOSWrapper>

    <div data-aos='zoom-in' data-aos-duration="600" className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm" onClick={onClose}/>
        <div className=" relative z-10 h-[80%] sm:h-full max-h-140 w-full max-w-100 min-w-100  bg-slate-300 p-6 border-1 border-slate-100 rounded-3xl" >
                <div className="mt-6 flex flex-col items-start">
                    <input
                    type="text"
                    placeholder="Digite seu Email"
                    value={form.from}
                    onChange={(e) => setForm({...form, from: e.target.value})}
                    className="w-1/2 left-0 focus:w-full my-5 p-2 bg-slate-100 rounded-sm transition-all duration-500"
                    />
                    <input
                    type="text"
                    placeholder="Assunto"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                    className="w-1/2 left-0 focus:w-full my-5 p-2 bg-slate-100 rounded-sm transition-all duration-500"
                    />
                    <textarea
                    placeholder="Mensagem"
                    value={form.html}
                    onChange={(e) => setForm({...form, html: e.target.value})}
                    className="w-1/2 left-0 focus:w-full focus:min-h-30 sm:focus:min-h-60 my-5 p-2 bg-slate-100 rounded-sm transition-all duration-500"
                    />
                </div>
                <div className="flex w-full justify-center">
            <button type='button' onClick={() => sendEmail()}
                className="absolute m-4 bottom-0 border-2 border-slate-200 w-1/2 h-15 cursor-pointer
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