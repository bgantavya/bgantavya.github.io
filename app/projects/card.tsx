'use client';
import { BookTextIcon, LucideExternalLink } from "lucide-react";
import Image from "next/image";

export default function Card({name, description, imageSrc, docsLink, projectLink, skills}: {name?: string, description?: string, imageSrc?: string, docsLink?: string, projectLink?: string, skills?: string[]}) {
  return (
    <div className="rounded-2xl bg-stone-900/75 p-6 max-w-lg border-4 border-fuchsia-700 shadow-lg transition hover:scale-[1.02] hover:border-fuchsia-500">
      {imageSrc && <Image
        src={imageSrc}
        alt={`${name} image`}
        width={300}
        height={200}
        quality={100}
        className="rounded-[0.75rem] w-full mb-4"
      />}
      
      <h2 className="text-2xl font-semibold text-center text-white mb-2">{name || "Untitled Project"}</h2>
      <p className="mb-2">{skills!.map((skill, index) => (
        <span key={index} className="text-stone-300 rounded-2xl px-1 m-1 border">{skill} </span>
      ))}</p>
      <p className="text-md text-stone-300 text-justify mb-4">
        {description || "No description available."}
      </p>

      <div className="flex justify-evenly items-center">
        <a href={docsLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white hover:underline text-lg p-1 px-3 rounded">
            <BookTextIcon className="inline"/> Read Docs
          </button>
        </a>
        {docsLink && (<a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button className="rounded-full p-1 px-3 text-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition">
            <LucideExternalLink className="inline" /> Project
          </button>
        </a>)}
      </div>

    </div>
  );
}
