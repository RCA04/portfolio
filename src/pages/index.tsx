import Image from "next/image";
import Link from "next/link";
import Knowledge from "./components/knowledge";
import Footer from "./components/footer"
import Carousel from "./components/carousel";
import AOSWrapper from "./components/AOSWrapper";





export default function Home() {

  return (
  <AOSWrapper>

    <div className="min-h-screen min-w-screen max-w-1000 bg-gradient-to-b from-slate-100 to bg-slate-400">
      <header className="min-w-full min-h-10 sm:min-h-13 flex justify-center items-center gap-5 sm:gap-10 font-bold bg-transparent backdrop-blur-sm border-b-2 border-slate-300 shadow-2xl/20 z-50 sticky top-0">
          <Link href='#about'>Sobre</Link>
          <Link href='#knowledge'>Conhecimentos</Link>
          <Link href='#projects'>Projetos</Link>
          <Link href='#contacts'>Contato</Link>
      </header>
      <main>
      <div className="min-h-180 w-full gap-5 flex flex-col justify-center items-center pb-30"  
       >
        <h2 data-aos="fade-in" className="font-medium text-md sm:text-2xl">Olá visitante seja bem-vindo(a)! 👋 </h2>
        <div
        >
        <Image
        src='/me.jpeg'
        alt='Eu foto'
        width={170}
        height={170}
        quality={100}
        className="rounded-full shadow-2xl/65 border-2 border-gray-500 w-40 h-40 sm:w-full sm:h-full"
        data-aos='fade-in' 
        />          
        </div>
        <h1 data-aos='fade-in' className="font-bold text-2xl sm:text-4xl mb-5">Me chamo Ryan da Costa</h1>
      </div>
      <div data-aos='fade-down' data-aos-duration="1400" id="about" className=" min-h-150 pb-15 font-bold text-base sm:text-lg flex flex-col  gap-10 sm:gap-15 justify-center items-center text-center">
        <p className="text-4xl">Sobre</p>
        <p className="text-md p-3 sm:text-inherit">
        Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções que realmente fazem a diferença<br/>
        Sou formado em Análise e Desenvolvimento de Sistemas e gosto de estar sempre aprendendo algo novo.<br/>
        Trabalho com ReactJS, Laravel, PHP, JavaScript e MySQL,
        e também curto cuidar da parte visual com Tailwind, MUI e Styled Components.<br/>
        Me considero uma pessoa comunicativa, curiosa e comprometida.<br/>  
        Atualmente estou focado em evoluir como desenvolvedor e colaborar 
        em projetos que me desafiem a pensar diferente todos os dias.
        </p>
      </div>
      <div data-aos="fade-down" data-aos-duration='800' id='knowledge' className="min-h-150 w-full flex flex-col max-w-full justify-center items-center mr-10 p-10 pt-7 xl:pt-15 xl:p-10">
        <h1 className="text-4xl font-bold">Conhecimentos</h1>
        <Knowledge/>
      </div>
      <div id='projects' data-aos="fade-down" data-aos-duration='800' className="min-h-auto my-30 pt-15 p-10"> <Carousel/></div>
      </main>
      <footer id="contacts" className="h-full sm:h-40 flex justify-center border-t-1 border-slate-300 bg-slate-300/30">
      <Footer/>
      </footer>


    </div>
  </AOSWrapper>
  );
}
