"use client"

import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub} from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { useState } from "react"
import Modal from "./components"


export default function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    
    function handleModal(){
        setModalIsOpen(!modalIsOpen);
    }
    
    
    return(

        <div className="w-full h-full text-slate-200">

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full mt-3 justify-center text-lg">
                    <Link href='https://www.linkedin.com/in/ryan-costa04' className="gap-2 flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-colors">
                    <CiLinkedin/>
                    <span>Ryan da Costa Araújo</span>
                    </Link>
                    
                    <Link href='https://github.com/RCA04' className="gap-2 flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-colors">
                    <FaGithub/>
                    <span>RCA04</span>
                    </Link>
                    
                    <div className="gap-2 flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30">
                    <IoIosMail/>
                    <p>ryan04.dev@gmail.com</p>
                    </div>
                    
                    <Link href='https://wa.me/5561985821807' className="gap-2 flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-colors">
                    <BsWhatsapp/>
                    <span>Fale comigo</span>
                    </Link>
            </div>

            <div className="flex justify-center items-center mt-5 h-15">
                <button className="border-1 border-purple-500/60 w-1/2 h-15 cursor-pointer
                 text-xl font-bold rounded-4xl
                 sm:hover:bg-purple-800/40 hover:mb-3
                 sm:hover:shadow-2xl/50
                 bg-purple-900/30
                 sm:bg-purple-800/30
                 mb-3
                 sm:mb-0
                 duration-200 ease-in
                 hover:scale-105
                 "
                 onClick={handleModal}
                 >
                Enviar Email
                </button>
                <Modal
                isOpen={modalIsOpen}
                onClose={handleModal}
 />
            </div>

        </div>
    )

}