import { MessageCircle } from "lucide-react"
import { Sidebar } from "lucide-react";

export function Header(){
  
    return(
        <div className="top-0 py-1 fixed z-10 text-white">
        <header className="flex rounded-full max-w-6xl mx-auto w-screen border-2 items-center p-1 md:px-4 md:pt-1 bg-stone-800/50 text-2xl justify-between">

    <div className="flex items-center pb-1 text-2xl md:text-3xl">
             <Sidebar className=" w-8 md:hidden" />

      <span>
        <span className="text-3xl md:text-4xl">
          {`{`}
        </span>
        {` G A N T A V Y A `}
        <span className="text-3xl md:text-4xl">
          {` }`}
        </span>
      </span>
      </div>

      <div className="mr-2 hidden md:inline text-xl">
        <a href="/gantavya_bansal_resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="px-4 mx-1 rounded-full border-2 border-fuchsia-600 pb-1">Resume</button>
        </a>
        <a href="#whoami">
        <button className="px-4 mx-1 rounded-full border-2 border-fuchsia-600 pb-1">About</button>
        </a>
        <a href="#work">
        <button className="px-4 mx-1 rounded-full border-2 border-fuchsia-600 pb-1">Work</button>
        </a>
        <a href="#projects">
        <button className="px-4 mx-1 rounded-full border-2 border-fuchsia-600 pb-1">Projects</button>
        </a>
      </div>

      <div>
        <a href="mailto:gantavyaoo@gmail.com?subject=Hi%20Gantavya&body=Hello!%20Gantavya" target="_blank" rel="noopener noreferrer">

      <button className="flex items-center text-base bg-fuchsia-600 rounded-full px-3  py-2">
        <MessageCircle className="inline-block mr-2 w-5" />
        Say Hi!
        </button>
        </a>
      </div>
    </header>
    
     </div>

    )
}
export function Footer(){
    return(
        <div className="bg-black-900 text-white">

        <footer className=" mx-auto mt-2 p-2 bg-stone-900/75 text-base">
          Made with <span className="text-lg">☕</span> by Gantavya Bansal. If you have any questions, suggestions, or just want to say hi,
        feel free to reach out! at <a className="text-fuchsia-600 text-lg underline" href="mailto:gantavyaoo@gmail.com?subject=Hi%20Gantavya&body=Hello!%20Gantavya" target="_blank" rel="noopener noreferrer"> gantavyaoo@gmail.com</a>
        </footer>

        </div>
    )
}