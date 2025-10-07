"use client"

import { useState } from "react"
import { FaCss3, FaGitAlt, FaHtml5, FaLaravel, FaPhp, FaReact, FaYarn } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiComposer, SiEslint, SiJsonwebtokens, SiMui, SiPrettier, SiStyledcomponents } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IoGitBranchOutline } from "react-icons/io5";
import { ImNpm } from "react-icons/im";
import { FaUbuntu } from "react-icons/fa6";

export default function  Knowledge(){

    const [desc, setDesc] = useState<string | null>(null)


    const descriptions: Record<string, string>={
      html:,

    };

    return(
        <div>
        <div className="grid grid-cols-7 mt-10 gap-30 text-7xl">
          <div>
            <button onClick={()=>setDesc(desc === "html" ? null : "html")}>
                <FaHtml5/>
            </button>
            {desc === "html" && <div>{descriptions.html}</div>}
          </div>
          <div>
            <FaCss3/>
          </div>
          <div>
              <IoLogoJavascript/>
          </div>
          <div>
              <FaReact/>
          </div>
          <div>
            <RiNextjsLine/>
          </div>
          <div>
              <SiStyledcomponents/>
          </div>
          <div>
              <RiTailwindCssFill/>
          </div>
          <div>
              <SiMui/>
          </div>
          <div> 
              <FaPhp/>
          </div>  
          <div>
              <FaLaravel/>
          </div>
          <div>
              <SiJsonwebtokens/>
          </div>
          <div>
              <GrMysql/>
          </div>
          <div>
            <FaGitAlt/>
          </div>
          <div>
            <IoGitBranchOutline/>
          </div>
          <div>
            <ImNpm/>
          </div>
          <div>
              <FaYarn/>
          </div>
          <div>
            <SiComposer/>
          </div>
          <div>
            <SiEslint/>
          </div>
          <div>
            <SiPrettier/>
          </div>
          <div>
            <FaUbuntu/>
          </div>
        </div>
        
        
        
        
        </div>
    )



}