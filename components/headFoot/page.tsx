'use client'
import { MessageCircle, Menu, Home, Briefcase, FolderOpen, FileText, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MobileNav } from "../ui/mobile-nav";

export function Header() {
  // const [navVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function nav() {
    setMobileNavOpen(!mobileNavOpen);
  }

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/work", label: "Work", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/Resume_Bansal_Gantavya_CSE.pdf", label: "Resume", icon: FileText, external: true }
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? 'py-0' : 'py-1'
      }`}>
        <header className={`flex justify-between rounded-3xl max-w-7xl mx-auto w-[92%] border border-white/10 items-center px-4 sm:px-6 py-2 transition-all duration-700 ease-out ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/40 border-white/20' 
            : 'bg-stone-900/60 backdrop-blur-md border-white/10'
        }`}>
          {/* Logo/Brand */}
          <div className="flex items-center text-xl md:text-2xl lg:text-3xl">
            <button 
              onClick={nav}
              className="p-2.5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300 md:hidden group"
              aria-label="Toggle navigation"
            >
              <Menu size={24} strokeWidth={2.5} className="text-white group-hover:text-fuchsia-300 transition-colors duration-300" />
            </button>
            
            <Link href='/' className="group ml-2 md:ml-0">
              <span className={`hover:text-xl pb-1 font-bold bg-gradient-to-r from-white via-fuchsia-200 to-purple-200 bg-clip-text text-transparent hover:from-fuchsia-400 hover:via-purple-400 hover:to-fuchsia-300 transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                GANTAVYA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full text-base md:text-lg space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group hover:text-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button className={`flex items-center space-x-2.5 p-3.5 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 ease-out border border-transparent hover:border-white/20 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <Icon size={18} className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-all duration-300 group-hover:scale-110" />
                    <span className="text-white group-hover:text-fuchsia-300 transition-all duration-300 font-medium">
                      {item.label}
                    </span>
                  </button>
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className={`lg:w-40 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link 
              href="mailto:gantavyaoo@gmail.com?subject=Hi%20Gantavya&body=Hello!%20Gantavya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <button className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-700 hover:from-fuchsia-500 hover:via-purple-500 hover:to-fuchsia-600 text-white rounded-full px-3 py-2 sm:px-5 sm:py-3 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/30 border border-fuchsia-500/30 hover:border-fuchsia-400/50">
                <MessageCircle size={16} className="group-hover:rotate-12 transition-transform duration-500 ease-out sm:w-4 sm:h-4" />
                <span className="font-semibold text-xs sm:text-sm ml-1 sm:ml-0">Say Hi!</span>
              </button>
            </Link>
          </div>
        </header>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { href: "mailto:gantavyaoo@gmail.com", icon: Mail, label: "Email", color: "hover:text-fuchsia-400" },
    { href: "https://github.com", icon: Github, label: "GitHub", color: "hover:text-gray-300" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    // { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "hover:text-blue-300" }
  ];

  return (
    <div className="bg-gradient-to-b from-black/20 to-stone-900/20 text-white mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <footer className={`max-w-7xl mx-auto p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-stone-900/20 via-gray-900/20 to-stone-900/20 backdrop-blur-xl rounded-t-3xl border-t border-white/10 relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-fuchsia-200 to-purple-200 bg-clip-text text-transparent">
                Gantavya Bansal
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                Full-stack developer passionate about creating innovative digital experiences. 
                Let&apos;s build something amazing together!
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 ${link.color}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Work', 'Projects', 'Resume'].map((item, index) => (
                <Link
                  key={item}
                  href={item === 'Resume' ? '/Resume_Bansal_Gantavya_CSE.pdf' : `/${item.toLowerCase()}`}
                  className={`block text-gray-300 hover:text-fuchsia-300 transition-all duration-300 hover:translate-x-1 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:gantavyaoo@gmail.com"
                className={`flex items-center space-x-3 text-gray-300 hover:text-fuchsia-300 transition-all duration-300 hover:translate-x-1 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ animationDelay: '800ms' }}
              >
                <Mail size={18} className="text-fuchsia-400" />
                <span className="text-sm">gantavyaoo@gmail.com</span>
              </a>
              <p className={`text-xs text-gray-500 leading-relaxed ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`} style={{ animationDelay: '900ms' }}>
                Available for freelance opportunities and exciting projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left space-y-2">
              <p className="text-sm text-gray-300 flex items-center justify-center sm:justify-start space-x-2">
                <span>Made with</span>
                <span className="text-xl animate-pulse">☕</span>
                <span>by Gantavya Bansal</span>
              </p>
              <p className="text-xs text-gray-500 max-w-sm">
                Crafted with passion, attention to detail, and a love for clean code
              </p>
            </div>
            
            <div className="flex flex-col items-center sm:items-end space-y-2">
              <div className="flex space-x-4 text-xs text-gray-500">
                <span>© Aug 2025</span>
                <span>•</span>
                <span>All rights reserved</span>
              </div>
              <p className="text-xs text-gray-600">
                Built with Next.js 15 & Tailwind CSS 4
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}