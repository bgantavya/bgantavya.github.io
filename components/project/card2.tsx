import { BookTextIcon } from "lucide-react";

export default function Card2({name, docsLink}: {name?: string, docsLink?: string}) {
  return (
    <div className="rounded-2xl bg-stone-900/75 p-2 items-center max-w-2xs flex justify-between border-4 border-fuchsia-700 shadow-lg transition hover:scale-[1.02] hover:border-fuchsia-500">
      <h2 className="text-sm font-semibold text-white">{name || "Untitled Project"}</h2>
        <a href={docsLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white  text-xs hover:underline p-1 rounded">
            <BookTextIcon size={15} className="inline"/> Read Docs
          </button>
        </a>
    </div>
  );
}
