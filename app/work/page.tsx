'use client'
import Card from "./card"
import data from '../../data.json'
import NetworkBackground from "@/components/networkbg"
import { Header,Footer } from "@/components/headFoot/page"
export default function Work() {
    return (
        <>
            <Header/>
        <div id="work" className=" flex w-[95%] mx-auto flex-col items-start justify-center p-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">
            <NetworkBackground />
            <h1 className="mx-auto text-4xl font-bolder mt-20 mb-10 text-fuchsia-600 p-2 rounded font-bold  rounded bg-stone-900/50">{`>>> history`}</h1>
            <div className="flex gap-10 flex-wrap mx-auto justify-center">
                {data.experiences.map((work)=>(<Card key={work.date} {...work} />))}
            </div>
        </div>
        <Footer/>
        </>
    )
}