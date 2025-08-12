"use client";

import { BookTextIcon } from "lucide-react";

export default function Card2({
  name, 
  docs_link
}: {
  name?: string, 
  docs_link?: string
}) {
  return (
    <div className="group relative w-full bg-gradient-to-r from-slate-900/20 via-slate-800/35 to-slate-900/20 rounded-xl p-4 flex justify-between items-center border border-slate-700/60 shadow-lg hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] backdrop-blur-sm">
      
      {/* Project Name */}
      <h2 className="text-sm sm:text-base font-semibold text-white group-hover:text-fuchsia-100 transition-colors duration-300 flex-1">
        {name || "Untitled Project"}
      </h2>
      
      {/* Read Docs Button */}
      {docs_link && (
        <a 
          href={docs_link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/btn rounded"
        >
          <button className="flex items-center space-x-2 text-white hover:text-fuchsia-300 text-xs sm:text-sm p-2 px-3 rounded-full bg-slate-800/60 hover:bg-slate-700/80 border border-slate-600/50 hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25">
            <BookTextIcon size={14} className="group-hover/btn:scale-110 transition-transform duration-200" />
            <span className="hidden sm:inline">Read Docs</span>
            <span className="sm:hidden">Docs</span>
          </button>
        </a>
      )}
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/5 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
