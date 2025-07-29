// // // app/actions.ts
// // "use server";
// // import { neon } from "@neondatabase/serverless";

// // export async function getData() {
// //     const sql = neon(process.env.DATABASE_URL!);
// //     const data = await sql`...`;
// //     return data;
// // }


// "use server";
// import { neon } from "@neondatabase/serverless";
// import data from "../data.json"; // Place your JSON in /app/data.json

// export async function insertAllData() {
//   const sql = neon(process.env.DATABASE_URL!);

//   // Insert Experiences
//   for (const exp of data.experiences) {
//     await sql`
//       INSERT INTO experiences (role, cname, date, description, skills)
//       VALUES (${exp.role}, ${exp.cname}, ${exp.date}, ${exp.description}, ${JSON.stringify(exp.skills)}::jsonb)
//     `;
//   }

//   // Insert Projects
//   for (const proj of data.projects) {
//     await sql`
//       INSERT INTO projects (name, docs_link, project_link, image_src, description, skills)
//       VALUES (${proj.name}, ${proj.docsLink}, ${proj.projectLink}, ${proj.imageSrc}, ${proj.description}, ${JSON.stringify(proj.skills)}::jsonb)
//     `;
//   }

//   // Insert Tools
//   for (const tool of data.tools) {
//     await sql`
//       INSERT INTO tools (name, docs_link)
//       VALUES (${tool.name}, ${tool.docsLink})
//     `;
//   }
// }


