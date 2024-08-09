import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();
const supabaseUrl: string | undefined = process.env.SUPABASE_URL
  ? process.env.SUPABASE_URL
  : "";
// const supabaseKey = process.env.SUPABSE_KEY;
const serviceRoleKey: string | undefined = process.env.SUPABASE_SERVICE_ROLEKEY
  ? process.env.SUPABASE_SERVICE_ROLEKEY
  : "";
const defaultSupabaseClientOption = {
  auth: { persistSession: false },
};
export const supabaseClient = createClient(
  supabaseUrl,
  serviceRoleKey,
  defaultSupabaseClientOption
);
