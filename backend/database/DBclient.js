import { createClient } from "@supabase/supabase-js";

const dbURL = import.meta.env.VITE_SUPABASE_URL;
const dbKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const db = createClient(dbURL, dbKey);
