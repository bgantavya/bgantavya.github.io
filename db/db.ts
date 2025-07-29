// lib/db.js
import { neon } from "@neondatabase/serverless";

// const sql = neon('postgresql://neondb_owner:npg_PV5Rlj7vFkbu@ep-quiet-star-adeez77c-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'); // Add DATABASE_URL in .env.local
const sql = neon(process.env.DATABASE_URL!); // Add DATABASE_URL in .env.local

export async function getProj() {
  const result = await sql`SELECT * FROM projects ORDER BY id ASC`;
  return result;
}

export async function getTools() {
  const result = await sql`SELECT * FROM tools`;
  return result;
}
export async function getExp() {
  const result = await sql`SELECT * FROM experiences ORDER BY id DESC`;
  return result;
}
