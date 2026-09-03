import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import mongoose from "mongoose";
import connectDB from "./config/db.js"
// import User from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"

const PORT = process.env.PORT;
const code = express();
code.use(express.json());

connectDB();

code.use("/users", userRoutes)
code.use("/auth", authRoutes)

code.listen(PORT, () => console.log("API running on port " + PORT));
