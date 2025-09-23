// IMPORTS
import { createClient } from "@supabase/supabase-js";

// CONSTS
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// CLIENT
export const supabase = createClient(supabaseUrl, supabaseAnonKey);