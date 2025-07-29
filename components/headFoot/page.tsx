'use client'
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export function Header() {
  const [navVisible, setNavVisible] = useState(false);
  function nav() {
    setNavVisible(!navVisible);
  }
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (nav && window.innerWidth < 768) {
      nav.classList.toggle("hidden", !navVisible);
      nav.classList.toggle("flex", navVisible);
    }
  }, [navVisible]); 

  return (
    <div className="top-0 py-1 fixed z-10 text-white">
      <header className="flex rounded-full max-w-6xl mx-auto w-screen border-2 items-center p-1 md:px-4 bg-stone-800/50 text-2xl justify-between">

        <div className="flex items-center text-2xl md:pb-2 md:text-3xl">
          {!navVisible ? <Menu onClick={nav} size={42} strokeWidth={1} className="p-1 font-bold md:hidden" /> : <X onClick={nav} size={42} className="p-1 md:hidden" />}
<Link href='/'>
          <span  className={`${navVisible?"hidden":"block"} pb-1 hover:text-fuchsia-600`}>
            {` G A N T A V Y A `}
          </span>
</Link>
        </div>

        <div id="nav" className="mr-2 flex flex-col items-center md:flex-row justify-evenly w-full md:w-1/2 text-lg">
          <Link href="/home">
            <button className="p-1 rounded-md">Home</button>
          </Link>
          <Link href="/work">
            <button className="p-1 rounded-md">Work</button>
          </Link>
          <Link href="/projects">
            <button className="p-1 rounded-md">Projects</button>
          </Link>
          <Link href="/gantavya_bansal_resume.pdf" target="_blank" download rel="noopener noreferrer">
            <button className="p-1 rounded-md">Resume</button>
          </Link>
        </div>

        <div className={navVisible?"hidden":"block"}>
          <Link href="mailto:gantavyaoo@gmail.com?subject=Hi%20Gantavya&body=Hello!%20Gantavya" target="_blank" rel="noopener noreferrer">

            <button className="flex items-center text-base bg-fuchsia-600 rounded-full px-3  py-2">
              <MessageCircle className="inline-block mr-2 w-5" />
              Say Hi!
            </button>
          </Link>
        </div>
      </header>

    </div>

  )
}
export function Footer() {
  return (
    <div className="bg-black-900 text-white">

      <footer className=" mx-auto mt-2 p-2 bg-stone-900/75 text-base">
        Made with <span className="text-lg">☕</span> by Gantavya Bansal. If you have any questions, suggestions, or just want to say hi,
        feel free to reach out! at <a className="text-fuchsia-600 text-lg underline" href="mailto:gantavyaoo@gmail.com?subject=Hi%20Gantavya&body=Hello!%20Gantavya" target="_blank" rel="noopener noreferrer"> gantavyaoo@gmail.com</a>
      </footer>

    </div>
  )
}