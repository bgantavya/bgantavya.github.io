export default function Card({ role, cname, date, description, skills }: {role?: string, cname?: string, date?: string, description?: string | string[], skills?: string[]}) {

  const responsibilities = Array.isArray(description)
    ? description
    : description?.split(".") || [];

  return (
    <div className="rounded-2xl bg-stone-900/75 p-6 max-w-md border-4 border-fuchsia-700 shadow-lg hover:shadow-fuchsia-700 transition">
      <h2 className="text-2xl font-bold text-white mb-1">{role || "Role Title"}</h2>
      <h3 className="text-xl text-fuchsia-300 mb-2">{cname || "Company Name"}</h3>
      <p className="text-sm text-stone-400 mb-4">{date || "Date not provided"}</p>
      <p className="mb-2">{skills!.map((skill, index) => (
        <span key={index} className="text-stone-300 rounded-2xl px-1 m-1 border">{skill} </span>
      ))}</p>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">Key Responsibilities:</h4>
        <ul className="list-disc list-inside text-stone-300 text-justify text-md space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index}>{item.trim()}.</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
