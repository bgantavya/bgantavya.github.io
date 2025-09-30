'use client'
import NetworkBackground from '@/components/networkbg'
import Image from 'next/image'
import { Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { Header, Footer } from '@/components/headFoot/page'
import Profile from '@/components/profile/page';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { useEffect, useState } from 'react';

export default function Pro(){
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialLinks = [
        {
            href: "https://github.com/bgantavya",
            icon: Github,
            label: "GitHub",
            color: "hover:bg-gray-800/50"
        },
        {
            href: "https://linkedin.com/in/bgantavya",
            icon: Linkedin,
            label: "LinkedIn",
            color: "hover:bg-blue-600/50"
        }
    ];

    return(
        <div id="body" className="selection:bg-fuchsia-900/30 min-h-screen">
                    <Header/>
            
            <main className="pt-20 sm:pt-24">
                {/* Hero Section */}
                <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] flex items-start justify-center px-4 py-6 sm:py-8 lg:py-12">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
                            
                            {/* Profile Image */}
                            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
                                <div className={`relative group transition-all duration-1000 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
                        <Image
                          src="/profai.jpeg"
                                        alt="Gantavya Bansal - AI + Fullstack Developer"
                                        width={400}
                                        height={400}
                                        loading="eager" fetchPriority="high"
                          quality={100}
                                        onLoad={() => setImageLoaded(true)}
                                        className={`rounded-full w-72 h-88 object-cover md:w-100 md:h-120 shadow-2xl border-4 border-white/10 transition-all duration-700 ${
                                            imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                        } group-hover:scale-105 group-hover:border-fuchsia-400/50 group-hover:shadow-fuchsia-500/25`}
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="order-2 lg:order-2 text-center lg:text-left space-y-6 sm:space-y-8">
                                <div className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-300 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                                        Gantavya Bansal
                                    </h1>
                                    
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                        <span className="text-fuchsia-400 font-medium">AI + Fullstack Engineer</span>
                                        <span className="text-gray-400"> | </span>
                                        <span className="text-purple-400 font-medium">Coding Mentor</span>
                                    </p>

                                    <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                        Transforming ideas into robust, scalable digital experiences with cutting-edge technology and user-centered design.
                                    </p>
                      </div>

                                {/* Social Links */}
                                <div className={`flex gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a 
                                                key={social.href}
                                                href={social.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group"
                                            >
                                                <button 
                                                    type="button" 
                                                    className={`flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base ${social.color}`}
                                                >
                                                    <Icon size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                                                    <span className="font-medium">{social.label}</span>
                                                    <ExternalLink size={14} className="sm:w-4 sm:h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                                </button>
                                            </a>
                                        );
                                    })}
                                </div>

                                {/* CTA Button */}
                                <div className={`transition-all duration-1000 delay-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}>
                                    <a 
                                        href="/Resume_Bansal_Gantavya_CSE.pdf" 
                                        download 
                                        target="_blank"
                                        className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/25"
                                    >
                                        <Download size={18} className="sm:w-5 sm:h-5" />
                                        <span>Download Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
                                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}>
                        <div className="flex flex-col items-center space-y-2 text-gray-400 animate-bounce">
                            <span className="text-xs sm:text-sm">Scroll Down</span>
                            <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-fuchsia-400 to-transparent" />
                      </div>
                    </div>
                </section>

                {/* Profile Section */}
              <Profile />

                {/* Network Background */}
              <NetworkBackground />
            </main>
            
            <Footer />
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
        </div>
    );
}