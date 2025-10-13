"use client"

import { useState } from "react";
import { IoClose } from "react-icons/io5";
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
        <div className=" relative z-10 h-[80%] sm:h-auto max-h-140 w-full max-w-100 min-w-100 bg-purple-900/30 p-6 sm:p-8 border-1 border-purple-500/60 rounded-3xl shadow-2xl shadow-purple-900/30 flex flex-col" >
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-purple-300">Enviar Email</h2>
                    <button onClick={onClose} aria-label="Fechar modal" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-800/40 border border-purple-500/40 hover:bg-purple-800/60 transition-colors">
                      <IoClose className="text-xl"/>
                    </button>
                </div>
                <div className="mt-6 flex-1 overflow-y-auto flex flex-col items-start gap-5">
                    <input
                    type="text"
                    placeholder="Digite seu Email"
                    value={form.from}
                    onChange={(e) => setForm({...form, from: e.target.value})}
                    className="
                    w-full px-4 py-2 rounded-lg border border-purple-500/60
             text-slate-100  bg-purple-800/40
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             focus:border-purple-500 transition-all"
                    />
                    <input
                    type="text"
                    placeholder="Assunto"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-purple-500/60
             text-slate-100  bg-purple-800/40
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             focus:border-purple-500 transition-all"
                    />
                    <textarea
                    placeholder="Mensagem"
                    value={form.html}
                    onChange={(e) => setForm({...form, html: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-purple-500/60
             text-slate-100  bg-purple-800/40
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             focus:border-purple-500 min-h-40 max-h-40 sm:min-h-70 sm:max-h-70 transition-all"
                    />
                </div>
                <div className="mt-6">
                  <button type='button' onClick={() => sendEmail()}
                      className="w-full border-2 border-purple-600 h-15 cursor-pointer
                      text-xl font-bold rounded-2xl
                      hover:bg-purple-800/50
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