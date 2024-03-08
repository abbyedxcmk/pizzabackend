import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const dbURL = "https://nrfvtgwzplkkbbyvlrfe.supabase.co";
const dbKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZnZ0Z3d6cGxra2JieXZscmZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTA3ODcsImV4cCI6MjAyNDcyNjc4N30.tcsZjfMx-gbi2iEl3HUARGZUPTv0sgsVV-T_XugMY6M";

export const db = createClient(dbURL, dbKey);
