import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import postgres, { Sql } from "postgres";
dotenv.config();

const connectionString: string | undefined = process.env.DATABASE_URL;
const sql: Sql<{}> = postgres(connectionString as string);

const supabaseUrl: string | undefined = process.env.SUPABASE_URL;
const supabaseKey: string | undefined = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl as string, supabaseKey as string);

export { supabase, sql };
