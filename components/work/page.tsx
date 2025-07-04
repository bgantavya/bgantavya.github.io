import Card from "./card"
import data from '../../data.json'
export default function Work() {
    return (
        <div id="work" className="mt-20 flex w-[95%] mx-auto flex-col items-start justify-center p-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">

            <h1 className="mx-auto text-4xl font-bolder mb-5 text-fuchsia-600 font-bold bg-stone-900/75">{`>>> history`}</h1>
            <div className="flex gap-10 flex-wrap justify-evenly mx-auto">
                {data.experiences.map((work)=>(<Card key={work.date} {...work} />))}
            </div>
        </div>
    )
}