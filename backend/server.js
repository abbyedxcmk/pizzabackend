import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Server is ready!"));

app.post("/api/register", (req, res) => {
  res.send("User has been auth" + req.body);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
