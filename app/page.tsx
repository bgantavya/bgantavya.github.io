'use client'
import Profile from '../components/profile/page'
import React, { useState, useEffect } from 'react'
import NetworkBackground from '@/components/networkbg'
import axios from 'axios'
import Image from 'next/image'
import {  Github, Linkedin, MailIcon } from "lucide-react";
import { Header,Footer } from '@/components/headFoot/page'

export default function Home() {
  const [isLoading, setLoad] = useState(true);
  const [ip, updateIp] = useState('0.0.0.0')
  useEffect(() => {
    const t = axios.get('https://dummyjson.com/ip')
    t.then((res)=> updateIp(res.data.ip))
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ?
        (<div
          id="msg"
          className="flex flex-col items-center justify-center h-screen bg-black text-green-400 text-center space-y-6 px-4"
        >
          <video
            src="loading.webm"
            width={250}
            loop
            autoPlay
            muted
            className="rounded-lg shadow-lg border border-green-600"
          />

          <div className="font-mono text-xl animate-pulse">
            {`>>> curl http://${ip}:3000 |`}
            <span className="animate-blink ml-1">█</span>
          </div>

          <p className="text-sm text-green-300 opacity-80 italic">
            Establishing secure tunnel to localhost...
          </p>
        </div>


        ) : (
          <div id="body" className="selection:bg-gray-900">
                    <Header/>
            <main>
              <div className="flex w-full flex-col md:flex-row-reverse items-center justify-evenly md:justify-evenly lg:justify-between h-screen mx-auto">
                      <div>
                        <Image
                          src="/icon.png"
                          alt="Profile Picture"
                          width={300}
                          height={200}
                          quality={100}
                          className="rounded-full w-84 lg:w-96 shadow-lg shadow-5"
                        />
              
                      </div>
                      <div className="flex flex-col justify-evenly items-center">
                        <h1 className="text-5xl md:text-6xl font-light lg:font-bold lg:text-7xl shadow shadow-5">Gantavya Bansal</h1>
                        <p className="text-xl lg:text-2xl text-gray-400 shadow shadow-2">AI + Fullstack Developer | Coding Mentor</p>
                        <div className="flex justify-between items-center md:justify-evenly mt-4 w-full">
                          <a href="https://github.com/bgantavya" target="blank">
              
                            <button type="button" className="flex items-end px-3 py-2 bg-stone-900/25 underline w-full text-white rounded">
                              <Github size={32} />
                              GitHub
                            </button>
                          </a>
                          <a href="https://linkedin.com/in/bgantavya" target="blank">
                            <button type="button" className="flex items-end px-3 py-2 bg-stone-900/25 underline w-full text-white rounded">
                              <Linkedin size={32} />
                              Linkedin
                            </button>
                          </a>
                          <a href="mailto:gantavyaoo@gmail.com" target="blank">
                            <button type="button" className="flex items-end px-3 py-2 bg-stone-900/25 underline w-full text-white rounded">
                              <MailIcon size={32} />
                              EmailMe
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
              <Profile />

              <NetworkBackground />
            </main>
            <Footer />
          </div>
        )}
    </>
  );
}