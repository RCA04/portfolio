"use client"

import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub} from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { useState } from "react"
import Modal from "./components"


export default function Contacts() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    
    function handleModal(){
        setModalIsOpen(!modalIsOpen);
    }
    
    
    return(

        <div className="w-full h-full text-slate-200" data-aos="fade-up" data-aos-duration="500">

            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full mt-2 sm:mt-3 justify-center text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4">
                    
                    <div className="w-full flex items-center justify-center min-h-12 sm:min-h-14 md:min-h-16">
                    <Link href='https://www.linkedin.com/in/ryan-costa04' className="gap-1 sm:gap-2 flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 min-w-full min-h-10 sm:min-h-12 md:min-h-15 sm:w-auto justify-center">
                    <CiLinkedin className="text-sm sm:text-lg md:text-xl"/>
                    <span className="truncate text-slate-200 hover:text-purple-300 transition-colors text-xs sm:text-sm md:text-base">Meu linkedin</span>
                    </Link>
                    </div>

                    <div className="w-full flex items-center justify-center min-h-12 sm:min-h-14 md:min-h-16">
                    <Link href='https://github.com/RCA04' className="gap-1 sm:gap-2 flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 min-w-full min-h-10 sm:min-h-12 md:min-h-15 sm:w-auto justify-center">
                    <FaGithub className="text-sm sm:text-lg md:text-xl"/>
                    <span className="text-slate-200 hover:text-purple-300 transition-colors text-xs sm:text-sm md:text-base">Meu Github</span>
                    </Link>
                    </div>
                    

                    <div className="w-full flex items-center justify-center min-h-12 sm:min-h-14 md:min-h-16">
                    <Link href='https://wa.me/5561985821807' className="gap-1 sm:gap-2 flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 min-w-full min-h-10 sm:min-h-12 md:min-h-15 sm:w-auto justify-center">
                    <BsWhatsapp className="text-sm sm:text-lg md:text-xl"/>
                    <span className="text-slate-200 hover:text-purple-300 transition-colors text-xs sm:text-sm md:text-base">Fale comigo</span>
                    </Link>
                    </div>
            
            </div>

            <div className="flex justify-center items-center mt-3 sm:mt-4 md:mt-5 min-h-[40%] sm:min-h-[50%] sm:h-12 md:h-15 px-2 sm:px-4">
                <button className="border-2 border-purple-500/60 w-full sm:w-3/4 md:w-1/2 h-10 sm:h-12 md:h-15 cursor-pointer
                 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-xl sm:rounded-2xl
                 hover:bg-purple-800/40 hover:mb-2 sm:hover:mb-3
                 hover:shadow-2xl hover:shadow-purple-500/30
                 bg-purple-900/30
                 text-slate-200 hover:text-purple-300
                 mb-2 sm:mb-0
                 duration-300 ease-in-out
                 hover:scale-105
                 transition-all
                 "
                 onClick={handleModal}
                 >
                Me Mande um Email
                </button>
                <Modal
                isOpen={modalIsOpen}
                onClose={handleModal}
 />
            </div>

        </div>
    )

}