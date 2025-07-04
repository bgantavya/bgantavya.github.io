export default function Card({ role, cname, date, description }: {role?: string, cname?: string, date?: string, description?: string | string[]}) {
  // console.log(data)
  console.log(role)
  // const  = data
  const responsibilities = Array.isArray(description)
    ? description
    : description?.split(",") || [];

  return (
    <div className="rounded-2xl w-1/2 bg-stone-900/75 p-6 max-w-sm border-4 border-fuchsia-700 shadow-lg hover:shadow-fuchsia-700 transition">
      <h2 className="text-xl font-bold text-white mb-1">{role || "Role Title"}</h2>
      <h3 className="text-md text-fuchsia-300 mb-2">{cname || "Company Name"}</h3>
      <p className="text-sm text-stone-400 mb-4">{date || "Date not provided"}</p>
      
      <div>
        <h4 className="text-sm font-semibold text-white mb-1">Key Responsibilities:</h4>
        <ul className="list-disc list-inside text-stone-300 text-sm space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
