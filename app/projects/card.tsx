"use client";

import { BookTextIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
// import { useState } from "react";

export default function Card({
  name, 
  description, 
  image_src, 
  docs_link, 
  project_link, 
  skills
}: {
  name?: string, 
  description?: string, 
  image_src?: string, 
  docs_link?: string, 
  project_link?: string, 
  skills?: string[]
}) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full max-w-lg mx-auto bg-gradient-to-br from-slate-900/20 via-slate-800/35 to-slate-900/20 rounded-2xl p-6 border border-slate-700/60 shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {image_src && (
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <Image
            src={image_src}
            alt={`${name} image`}
            width={300}
            height={200}
            quality={100}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-4 group-hover:text-fuchsia-100 transition-colors duration-300">
        {name || "Untitled Project"}
      </h2>

      {/* Skills Section */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {skills?.map((skill, index) => (
            <span 
              key={index} 
              className="inline-block px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/60 rounded-full border border-slate-600/50 transition-all duration-300 hover:scale-110 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-500 cursor-default shadow-lg hover:shadow-fuchsia-500/50"
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

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-300 text-justify mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
        {description || "No description available."}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-evenly items-center">
        {docs_link && (
          <a 
            href={docs_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn rounded"
          >
            <button className="flex items-center space-x-2 text-white hover:text-fuchsia-300 text-sm sm:text-base p-2 px-4 rounded-full bg-slate-800/60 hover:bg-slate-700/80 border border-slate-600/50 hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/25">
              <BookTextIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              <span>Read Docs</span>
            </button>
          </a>
        )}
        
        {project_link && (
          <a 
            href={project_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn"
          >
            <button className="flex items-center space-x-2 rounded-full p-2 px-4 text-sm sm:text-base bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/50 transform hover:-translate-y-1">
              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              <span>View Project</span>
            </button>
          </a>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/5 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-xl" />
    </div>
  );
}
