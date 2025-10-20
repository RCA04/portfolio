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

    <div data-aos='zoom-in' data-aos-duration="400" className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm" onClick={onClose}/>
        <div className=" relative z-10 h-[90%] sm:h-auto max-h-140 w-full max-w-98 sm:max-w-100 min-w-98 sm:min-w-100 bg-gradient-to-br from-purple-900/40 to-slate-800/40 backdrop-blur-lg p-6 sm:p-6 lg:p-8 border border-purple-500/60 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-900/30 flex flex-col mx-1 sm:mx-0" >
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-purple-700/40">
                    <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Enviar Email</h2>
                    <button onClick={onClose} aria-label="Fechar modal" className="inline-flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg bg-purple-800/40 border border-purple-500/40 hover:bg-purple-800/60 hover:scale-105 transition-all duration-300">
                      <IoClose className="text-lg sm:text-xl text-slate-200"/>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col items-start gap-5 sm:gap-5 pr-2">
                    <input
                    type="text"
                    placeholder="Digite seu Email"
                    value={form.from}
                    onChange={(e) => setForm({...form, from: e.target.value})}
                    className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-lg border border-purple-500/60
             text-slate-100 bg-purple-800/40 text-base sm:text-base
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             focus:border-purple-500 transition-all"
                    />
                    <input
                    type="text"
                    placeholder="Assunto"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-lg border border-purple-500/60
             text-slate-100 bg-purple-800/40 text-base sm:text-base
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             focus:border-purple-500 transition-all"
                    />
                    <textarea
                    placeholder="Mensagem"
                    value={form.html}
                    onChange={(e) => setForm({...form, html: e.target.value})}
                    className="w-full px-4 sm:px-4 py-4 sm:py-3 rounded-lg border border-purple-500/60
             text-slate-100 bg-purple-800/40 text-base sm:text-base
             focus:outline-none focus:ring-2 focus:ring-purple-500 
             focus:border-purple-500 min-h-40 max-h-40 sm:min-h-40 sm:max-h-40 lg:min-h-70 lg:max-h-70 transition-all resize-none"
                    />
                </div>
                <div className="mt-6 sm:mt-6">
                  <button type='button' onClick={() => sendEmail()}
                      className="w-full border-2 border-purple-600 h-14 sm:h-15 cursor-pointer
                      text-lg sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl
                      bg-gradient-to-r from-purple-600 to-purple-700
                      hover:from-purple-500 hover:to-purple-600
                      text-white hover:text-purple-100
                      hover:shadow-2xl hover:shadow-purple-500/30
                      duration-300 ease-in-out
                      hover:scale-105
                      transition-all
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