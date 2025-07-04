import Card from "./card"
import Card2 from "./card2"
import data from "../../data.json"
export default function Project() {
    return (
        <div id="projects" className="flex w-[95%] mt-20 mx-auto flex-col items-start justify-center p-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">

            <h1 className="mx-auto mb-5 text-center text-4xl font-bold p-2 mb-2 text-fuchsia-500">{`>>> repo list`}</h1>
            <div className="flex gap-10 flex-wrap flex justify-evenly mx-auto">
                {data.projects.map((project)=>(<Card key={project.name} {...project}/>))}
            </div>

            <h1 className="mx-auto text-center mb-5 mt-10 text-4xl font-bold p-2 mb-2 text-fuchsia-500">{`>>> utility `}</h1>
            <div className="flex flex-wrap mx-auto items-center justify-evenly flex-row gap-10">
                {data.tools.map((tool)=>(<Card2 key={tool.name} {...tool}/>))}
            </div>

        </div>
    )
}