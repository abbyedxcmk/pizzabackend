import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import { createClient } from "@supabase/supabase-js";

const dbURL = "https://nrfvtgwzplkkbbyvlrfe.supabase.co";
const dbKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZnZ0Z3d6cGxra2JieXZscmZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNTA3ODcsImV4cCI6MjAyNDcyNjc4N30.tcsZjfMx-gbi2iEl3HUARGZUPTv0sgsVV-T_XugMY6M";

const db = createClient(dbURL, dbKey);

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is ready!"));

app.post("/api/register", async (req, res) => {
  const { data, error } = await db
    .from("User")
    .insert([{ username: req.body.username, password: req.body.password }])
    .select();
  console.log("User added to DB");
  res.send("User add to db");
});

app.listen(port, () => console.log(`Server started at port ${port}`));
