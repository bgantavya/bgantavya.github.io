'use client'
import Pro from './home/page';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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


        ) : <Pro/>
        }
    </>
  );
}