import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import pizzaRoutes from "./routes/pizzaRoutes.js";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 3000; // Default to port 3000 if PORT isn't set
const app = express();
app.use(express.json());
app.use(cors());
// API routes
app.use("/api/users", userRoutes);
app.use("/api/pizzas", pizzaRoutes);
// Catch-all for testing that the server is running
app.all("/", (req, res) => res.send("Server is ready!"));
// Error handling middleware
app.use(notFound);
app.use(errorHandler);
// Start the server
app.listen(port, () => console.log(`Server started at port ${port}`));
