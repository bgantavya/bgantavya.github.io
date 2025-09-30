'use client'
import { useState, useEffect } from 'react'
import { X, Home, Briefcase, FolderOpen, FileText, MessageCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: "/home", label: "Home", icon: Home, description: "Welcome to my portfolio" },
    { href: "/work", label: "Work", icon: Briefcase, description: "Professional experience" },
    { href: "/projects", label: "Projects", icon: FolderOpen, description: "Featured projects" },
    { href: "/Resume_Bansal_Gantavya_CSE.pdf", label: "Resume", icon: FileText, description: "Download my resume", external: true }
  ]

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(onClose, 300)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Navigation Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            bgantavya
          </h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Close navigation"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-6 space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={handleClose}
                className="group"
              >
                <div 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] border border-transparent hover:border-white/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-fuchsia-500/20 group-hover:bg-fuchsia-500/30 transition-colors duration-200">
                      <Icon size={20} className="text-fuchsia-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-fuchsia-300 transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-500 group-hover:text-fuchsia-400 transition-colors duration-200" />
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Contact Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <Link
            href="mailto:gantavyaoo@gmail.com?subject=Hi%20Gantavya&body=Hello!%20Gantavya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="group"
          >
            <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25">
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Get In Touch</span>
            </button>
          </Link>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Let&apos;s build something amazing together
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 