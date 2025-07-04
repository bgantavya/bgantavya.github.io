'use client'
import { Header, Footer } from '@/components/headFoot/page'
import { Profile } from '@/components/profile/page'
import { Stuti } from '@/components/stuti/page'
import React, { useState, useEffect } from 'react'
import NetworkBackground from '@/components/networkbg'
import Work from '@/components/work/page'
import Project from '@/components/project/page'

export default function Home() {
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
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
            {`>>> curl http://localhost:3000 |`}
            <span className="animate-blink ml-1">█</span>
          </div>

          <p className="text-sm text-green-300 opacity-80 italic">
            Establishing secure tunnel to localhost...
          </p>
        </div>


        ) : (
          <div id="body" className="selection:bg-gray-900">
            <Header />
            <main>
              <Profile />
              <Work />
              <Project />
              <NetworkBackground />
              <Stuti />
            </main>
            <Footer />
          </div>
        )}
    </>
  );
}