'use client'
import Pro from './home/page';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [isLoading, setLoad] = useState(true);
  const [ip, updateIp] = useState('0.0.0.0')
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    
    const t = axios.get('https://dummyjson.com/ip')
    t.then((res)=> updateIp(res.data.ip))
    
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    const timer = setTimeout(() => {
      setLoad(false);
    }, 2500);
    
    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    };
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full max-w-md mx-auto">
          <div className="relative group w-full flex justify-center">
            <video
              src="loading.webm"
              width={200}
              height={200}
              loop
              autoPlay
              muted
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl border-2 border-fuchsia-500/50 transition-all duration-500 group-hover:scale-105 group-hover:border-fuchsia-400 group-hover:shadow-fuchsia-500/25"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="text-gray-300">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-fuchsia-500/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full max-w-md mx-auto">
            {/* Logo/Video */}
            <div className="relative group w-full flex justify-center">
          <video
            src="loading.webm"
                width={200}
                height={200}
            loop
            autoPlay
            muted
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl border-2 border-fuchsia-500/50 transition-all duration-500 group-hover:scale-105 group-hover:border-fuchsia-400 group-hover:shadow-fuchsia-500/25"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Terminal-style loading text */}
            <div className="font-mono text-base sm:text-lg md:text-xl space-y-3 w-full">
              <div className="flex items-center justify-center space-x-2 text-sm sm:text-base md:text-lg">
                <span className="text-fuchsia-400 break-all">{`>>> curl http://${ip}:3000`}</span>
                <span className="animate-pulse text-fuchsia-300">█</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 opacity-80 italic px-2">
                Establishing secure tunnel to localhost...
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-xs sm:max-w-sm mx-auto space-y-2">
              <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 border border-gray-700 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                {Math.round(loadingProgress)}% Complete
              </div>
            </div>

            {/* Loading dots */}
            <div className="flex space-x-2 justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-fuchsia-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-fuchsia-500/20 text-xs sm:text-sm animate-pulse">
            &lt;/&gt;
          </div>
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-fuchsia-500/20 text-xs sm:text-sm animate-pulse">
            {`{ }`}
          </div>
        </div>
      ) : (
        <>
        <Pro/>
        {/* <audio src="cinematic-hip-hop-vlog-music-349853.mp3" autoPlay loop controls/> */}
        </>
      )}
    </>
  );
}