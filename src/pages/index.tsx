import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Repos from "./components/component";
import Knowledge from "./components/knowledge";
import Footer from "./components/footer"





export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to bg-slate-400">
      <header className="min-w-full min-h-13 flex justify-center items-center gap-10 font-bold bg-transparent backdrop-blur-sm border-b-2 border-slate-300 shadow-2xl/20 z-50 sticky top-0">
          <Link href='/'>Início</Link>
          <Link href='/'>Sobre</Link>
          <Link href='/'>Projetos</Link>
          <Link href='/'>Projetos de curso</Link>
          <Link href='/'>Contato</Link>
      </header>
      <main>
      <div className="min-h-180 gap-5 flex flex-col justify-center items-center pb-30"  
       id='start'>
        <h2 className="font-medium text-2xl">Olá visitante seja bem-vindo(a)! 👋 </h2>
        <div
        >
        <Image
        src='/me.jpeg'
        alt='Eu foto'
        width={180}
        height={140}
        quality={100}
        className="rounded-full shadow-2xl/65 border-2 border-gray-500"
        />          
        </div>
        <h1 className="font-bold text-4xl">Me chamo Ryan da Costa</h1>
      </div>
      <div id='about' className=" min-h-150 pb-20 font-bold text-lg flex flex-col gap-15 justify-center items-center text-center">
        <p className="text-4xl">Sobre</p>
        <p>
        Desenvolvedor full-stack, apaixonado por tecnologia e por criar soluções que realmente fazem a diferença<br/>
        Sou formado em Análise e Desenvolvimento de Sistemas e gosto de estar sempre aprendendo algo novo.<br/>
        Trabalho com ReactJS, Laravel, PHP, JavaScript e MySQL,
        e também curto cuidar da parte visual com Tailwind, MUI e Styled Components.<br/>
        Me considero uma pessoa comunicativa, curiosa e comprometida.<br/>  
        Atualmente estou focado em evoluir como desenvolvedor e colaborar 
        em projetos que me desafiem a pensar diferente todos os dias.
        </p>
      </div>
      <div id='knowledge' className="min-h-150 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold">Conhecimentos</h1>
        <Knowledge/>
      </div>
      <div className="min-h-180"> projetos</div>
      <div> projetos de curso</div>
      </main>
      <footer className="h-40 flex justify-center border-t-1 border-slate-300 bg-slate-300/30">
      <Footer/>
      </footer>


    </div>
  );
}
