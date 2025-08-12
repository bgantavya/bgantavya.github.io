"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Building2, Calendar, Code2 } from "lucide-react";

export default function Card({ 
  role, 
  cname, 
  date, 
  description, 
  skills 
}: {
  role?: string, 
  cname?: string, 
  date?: string, 
  description?: string | string[], 
  skills?: string[]
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const responsibilities = Array.isArray(description)
    ? description
    : description?.split(".") || [];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative w-full max-w-sm mx-auto bg-gradient-to-br from-slate-900/20 via-slate-800/20 to-slate-900/20 rounded-2xl p-6 border border-slate-700/60 shadow-2xl hover:shadow-fuchsia-500/25 transition-all duration-500 ease-out transform hover:-translate-y-3 hover:scale-[1.02] backdrop-blur-sm">
      {/* Header Section */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-fuchsia-500/20 rounded-lg group-hover:bg-fuchsia-500/30 transition-colors duration-300">
            <Code2 className="w-5 h-5 text-fuchsia-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-fuchsia-100 transition-colors duration-300">
              {role || "Role Title"}
            </h2>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Building2 className="w-4 h-4 text-fuchsia-400/70" />
          <h3 className="text-base sm:text-lg text-fuchsia-300 font-medium group-hover:text-fuchsia-200 transition-colors duration-300">
            {cname || "Company Name"}
          </h3>
        </div>
        
        <div className="flex items-center space-x-3">
          <Calendar className="w-4 h-4 text-slate-400/70" />
          <p className="text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">
            {date || "Date not provided"}
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider text-center">
          Skills & Technologies
        </h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-full border border-slate-600/50 transition-all duration-300 hover:scale-110 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-500 cursor-default shadow-lg hover:shadow-fuchsia-500/50"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateY(${index * 2}px)`
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities Toggle */}
      <div className="border-t border-slate-700/60 pt-4">
        <button
          onClick={handleToggle}
          className="w-full flex items-center justify-between text-left group/button transition-all duration-300 hover:scale-105 p-2 rounded-lg hover:bg-slate-800/50"
        >
          <h4 className="text-lg font-semibold text-white group-hover/button:text-fuchsia-300 transition-colors duration-300">
            Key Responsibilities
          </h4>
          <div className="text-fuchsia-400 group-hover/button:text-fuchsia-300 transition-all duration-300 p-1 rounded-full group-hover/button:bg-fuchsia-500/20">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 transform rotate-180 transition-all duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-all duration-300" />
            )}
          </div>
        </button>

        {/* Responsibilities Content */}
        <div 
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-fuchsia-400/50"></span>
                <span className="text-justify flex-1">{item.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/5 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-xl" />
    </div>
  );
}
