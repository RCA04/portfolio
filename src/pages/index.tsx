import Image from "next/image";
import Link from "next/link";
import Knowledge from "./components/knowledge";
import Footer from "./components/footer"
import Carousel from "./components/carousel";
import AOSWrapper from "./components/AOSWrapper";





export default function Home() {

  return (
  <AOSWrapper>

    <div className="min-h-screen min-w-screen max-w-1000">
      <header className="min-w-full min-h-16 sm:min-h-20 flex justify-center items-center gap-3 sm:gap-6 lg:gap-10 font-bold bg-black/10 backdrop-blur-md border-b border-purple-500/40 shadow-2xl z-50 sticky top-0 px-4">
          <Link href='#about' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Sobre</Link>
          <Link href='#knowledge' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Conhecimentos</Link>
          <Link href='#projects' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Projetos</Link>
          <Link href='#contacts' className="text-slate-200 hover:text-purple-300 transition-colors duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-900/30 text-sm sm:text-base">Contato</Link>
      </header>
      <main>
      <div className="min-h-180 w-full gap-4 sm:gap-6 flex flex-col justify-center items-center pb-20 sm:pb-30 px-4"  
       >
        <h2 data-aos="fade-in" className="font-medium text-lg sm:text-xl lg:text-2xl text-slate-200 text-center">Olá visitante seja bem-vindo(a)! 👋 </h2>
        <div className="relative">
        <Image
        src='/me.jpeg'
        alt='Eu foto'
        width={170}
        height={170}
        quality={100}
        className="rounded-full shadow-2xl/65 border-2 border-purple-400 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
        data-aos='fade-in' 
        />          
        </div>
        <h1 data-aos='fade-in' className="font-bold text-xl sm:text-2xl lg:text-4xl mb-5 text-white text-center px-4">Me chamo Ryan da Costa</h1>
      </div>
      <div data-aos='fade-down' data-aos-duration="1400" id="about" className="min-h-150 pb-15 font-bold text-base sm:text-lg flex flex-col gap-8 sm:gap-12 lg:gap-15 justify-center items-center text-center px-4 sm:px-6">
        <p className="text-2xl sm:text-3xl lg:text-4xl text-purple-300">Sobre</p>
        <p className="text-sm sm:text-base lg:text-lg p-4 sm:p-6 text-slate-200 max-w-4xl leading-relaxed">
        Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções que realmente fazem a diferença.<br className="hidden sm:block"/>
        Sou formado em Análise e Desenvolvimento de Sistemas e gosto de estar sempre aprendendo algo novo.<br className="hidden sm:block"/>
        Trabalho com ReactJS, Laravel, PHP, JavaScript e MySQL,
        e também curto cuidar da parte visual com Tailwind, MUI e Styled Components.<br className="hidden sm:block"/>
        Me considero uma pessoa comunicativa, curiosa e comprometida.<br className="hidden sm:block"/>  
        Atualmente estou focado em evoluir como desenvolvedor e colaborar 
        em projetos que me desafiem a pensar diferente todos os dias.
        </p>
      </div>
      <div data-aos="fade-down" data-aos-duration='800' id='knowledge' className="min-h-150 w-full flex flex-col max-w-full justify-center items-center p-4 sm:p-6 lg:p-10 pt-7 xl:pt-15">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-6 sm:mb-8">Conhecimentos</h1>
        <Knowledge/>
      </div>
      <div id='projects' data-aos="fade-down" data-aos-duration='800' className="min-h-auto my-20 sm:my-30 pt-10 sm:pt-15 p-4 sm:p-6 lg:p-10"> <Carousel/></div>
      </main>
      <footer id="contacts" className="h-full sm:h-40 flex justify-center border-t-1 border-purple-500/30 bg-purple-900/20 px-4 sm:px-6">
      <Footer/>
      </footer>


    </div>
  </AOSWrapper>
  );
}
