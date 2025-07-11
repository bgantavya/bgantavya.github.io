import Card from "./card"
import Card2 from "./card2"
import data from "../../data.json"
import NetworkBackground from "@/components/networkbg"
import React from "react"
import { Header,Footer } from "@/components/headFoot/page"
export default function Project() {
    return (
        <>
        <Header/>
        <div id="projects" className="flex w-[95%] mx-auto flex-col items-start justify-center p-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">

            <h1 className="mx-auto mt-20 bg-stone-900/50 mb-10 text-center text-4xl font-bold p-2 rounded mb-2 text-fuchsia-500">{`>>> repo list`}</h1>
            <div className="gap-10 flex-wrap flex justify-center mx-auto">
                {data.projects.map((project)=>(<Card key={project.name} {...project}/>))}
            </div>

            <h1 className="mx-auto text-center bg-stone-900/50 mb-5 mt-10 text-4xl font-bold p-2 rounded mb-2 text-fuchsia-500">{`>>> utility `}</h1>
            <div className="grid mx-auto gap-2 md:grid-cols-2">
                {data.tools.map((tool)=>(<Card2 key={tool.name} {...tool}/>))}
            </div>

        </div>
        <NetworkBackground />
        <Footer/>
        </>
    )
}