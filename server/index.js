import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import mongoose from "mongoose";
import connectDB from "./config/db.js"
import User from "./models/User.js";

const PORT = process.env.PORT;
const code = express();
code.use(express.json());

connectDB();

code.get("/users", async (req, res) => {
    try {
        const users = await User.find().sort({ date: -1 });
    res.status(200).json({
        success: true,
        data: users,
    });
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(404).json({
            success: false,
            message: "Users not found",
        });
    }
});

code.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200),sjon({
            success: true,
            data: user,
        });

        if(!user) return res.status(404).json({
            message: "User not found",
            success: false,
        })
    } catch (error) {
        console.error("Error fetching user: ", error);
        res.status(400).json({
            success: false,
            message: "Error fetching user"
        });
    }
});

code.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            // message: "User Created Successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error creating user: ", error);
        res.status(400).json({
            success: false,
            message: "Error creating user",
        });
    }
});

code.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json(user)
    } catch (error) {
        console.error("Error updating user: ", error)
        res.status(500).json({
            success: false,
            message: "Error updating user",
        });
    }
});

code.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).json({
                success: false,
                message: "User not found",
            });
        }else{
                res.status(200).json({
                success: true,
                message: "User deleted successfully",
            });
        }
    } catch (error) {
        console.error("Error deleting user: ", error);
        res.status(400).json({
            success: false,
            message: "Error deleting user",
        });
    }
});

code.listen(PORT, () => console.log("API running on port " + PORT));