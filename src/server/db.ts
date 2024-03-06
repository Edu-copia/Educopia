import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import postgres from "postgres";
dotenv.config();

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase, sql };
