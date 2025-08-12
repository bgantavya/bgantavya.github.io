'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-fuchsia-500/25 transition-all duration-300 hover:scale-110 group"
      aria-label="Scroll to top"
    >
      <ChevronUp 
        size={24} 
        className="group-hover:-translate-y-1 transition-transform duration-300" 
      />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
    </button>
  )
} 