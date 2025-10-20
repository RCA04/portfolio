import Image from "next/image";
import Link from "next/link";
import Knowledge from "./components/knowledge";
import Contacts from "./components/contacts"
import Carousel from "./components/carousel";
import AOSWrapper from "./components/AOSWrapper";
import { IoIosMail } from "react-icons/io"
import { FaGithub, FaPhone} from "react-icons/fa"
import { CiLink} from "react-icons/ci"
import { BsWhatsapp } from "react-icons/bs"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";








export default function Home() {

  return (
  <AOSWrapper>

    <div className="min-h-screen min-w-screen max-w-1000 bg-black">
      <header className="min-w-full min-h-16 sm:min-h-20 flex justify-center items-center gap-3 sm:gap-6 lg:gap-10 font-bold backdrop-blur-md border-b border-purple-500/40 shadow-2xl z-50 sticky top-0 px-4">
          <Link href='/#about' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Sobre</Link>
          <Link href='/#knowledge' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Conhecimentos</Link>
          <Link href='/#projects' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Projetos</Link>
          <Link href='/#contacts' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Contato</Link>
      </header>
      <main>
      <div className="min-h-180 w-full gap-4 sm:gap-6 flex flex-col justify-center items-center pb-20 sm:pb-30 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800"  
       >
        <h2 data-aos="fade-down" data-aos-duration="500" className="font-medium text-lg sm:text-xl lg:text-2xl text-slate-200 text-center">Olá visitante seja bem-vindo(a)! 👋 </h2>
        <h1 data-aos='fade-up' data-aos-duration="500" data-aos-delay="200" className="font-bold text-xl sm:text-2xl lg:text-4xl mb-5 text-white text-center px-4">Me chamo Ryan da Costa</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        
        <div className="h-full w-full flex justify-center items-center">
        <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400" className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">SOBRE</p>
        </div>
        
        
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
        <p className="text-sm sm:text-base font-bold lg:text-lg p-4 sm:p-6 text-slate-300 max-w-4xl leading-relaxed">
        Desde pequeno sou fascinado por computadores. Comecei mexendo com hardware, conhecendo tudo pra entender como funcionava.<br/>
        Hoje, formado em Análise e Desenvolvimento de Sistemas,
        sigo essa curiosidade no mundo da programação, sempre aprendendo.
        </p>
        </div>
        </div>

    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="800" className="flex flex-col mt-8 items-center w-full">
      <p className="text-xl font-semibold text-purple-300 mb-6">Conhecimentos Gerais</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex justify-center items-center rounded-2xl hover:scale-110 font-bold p-3 w-40 h-10 transition-all duration-300 border border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30 hover:border-purple-400/70 shadow-lg hover:shadow-purple-500/20"> 
          <span className="text-purple-300">ReactJs</span> 
        </div>
        <div className="flex justify-center items-center rounded-2xl hover:scale-110 font-bold p-3 w-40 h-10 transition-all duration-300 border border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30 hover:border-purple-400/70 shadow-lg hover:shadow-purple-500/20"> 
          <span className="text-purple-300">Laravel</span> 
        </div>
        <div className="flex justify-center items-center rounded-2xl hover:scale-110 font-bold p-3 w-40 h-10 transition-all duration-300 border border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30 hover:border-purple-400/70 shadow-lg hover:shadow-purple-500/20"> 
          <span className="text-purple-300">TailwindCss</span> 
        </div>
      </div>
    </div>
        
      </div>

       
      <div id='knowledge' className="min-h-150 w-full flex flex-col max-w-full justify-center items-center p-6 pt-7 xl:pt-15 bg-gradient-to-br from-black via-gray-800 to-gray-900">
        <h1 data-aos="fade-down" data-aos-duration="500" className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8">Conhecimentos</h1>
                        <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="text-sm sm:text-base lg:text-lg font-medium text-slate-300 bg-purple-900/30 px-4 sm:px-6 py-2 rounded-full border border-purple-500/30 text-center">
                    ✨ Clique nos ícones para detalhes de uso ✨
                </span>
        <Knowledge/>
      </div>
 
      <div id='projects'  
        className="min-h-auto 
          pt-10 sm:pt-15 p-4 sm:p-6 lg:p-10
           bg-gradient-to-br from-gray-900 via-black to-gray-800
          ">
         <Carousel/>
      </div>
      
      <div id='contacts'
      className="min-h-180
      pt-10 sm:pt-15 p-4 sm:p-6 lg:p-10
      bg-gradient-to-br from-black via-gray-800 to-gray-900
      ">

        <div className="h-full w-full flex flex-col justify-center items-center mb-8">
          <p data-aos="zoom-in" data-aos-duration="600" className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">CONTATOS</p>
          <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="text-base font-bold text-slate-300 mt-4">Utilize os meios de comunicação abaixo</span>
        </div>
        
        <Contacts/>
      </div>

      </main>
      
      <footer className="h-full sm:h-40 flex flex-col justify-center border-t border-purple-500/30 bg-gradient-to-r from-purple-900/20 via-black to-purple-900/20 p-6 sm:p-8">
        
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col text-center lg:text-left">
          <p className="text-2xl font-bold text-white">Ryan da Costa Araújo</p>
          <p className="text-lg text-purple-300">Desenvolvedor Full-stack</p>
        </div>  
        <div className="contato text-center lg:text-right">
          <p className="text-lg font-bold flex items-center gap-2 text-purple-300 justify-center lg:justify-end"> <FaPhoneSquareAlt/>Contato:</p>
          
          <p className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors justify-center lg:justify-end">
            <IoIosMail/>
            <Link href="mailto:ryan04.dev@gmail.com" className="hover:text-purple-300 transition-colors">ryan04.dev@gmail.com</Link>
          </p>

          <p className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors justify-center lg:justify-end">
            <FaPhone/>
            <span>{"(61)"} 98582-1809</span>
          </p>

            <p className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors justify-center lg:justify-end">
              <FaLinkedin/>
            <Link href="https://www.linkedin.com/in/ryan-costa04" className="hover:text-purple-300 transition-colors">ryan-costa04</Link>
          </p>

        </div>

        </div>
      
      </footer>


    </div>
  </AOSWrapper>
  );
}
