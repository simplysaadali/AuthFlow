// import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!email || !name || !password ){
            return res.status(400).json({
                success: false,
                message: "All fields required!",
            });
        }

        const findUser = await User.findOne({ email });

        if(findUser){
            return res.json({
                message: "Email already registered!"
            })
        }

        const user = await User.create({ name, email, password })

        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            data: user,
        });
        
    } catch (error) {
        console.error("Server Error: ", error)
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } =  req.body;
        const user = await User.findOne({ email });

        if(!user){
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        const userData = {
            id: user._id,
            name: user.name,
            email: user.email
        }

         if(user.password !== password){
            return res.status(400).json({
                message: "Invalid Passsword!",
                success: false,
            })
        }

        if(!email || !password){
            res.status(400).json({
                success: false,
                message: "Email and Password both required!",
            });
        }

            res.status(200).json({
            success: true,
            message: "Login Successfull!",
            data: userData,
        });

       
    } catch (error) {
        console.error("Server Error: ", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}

export const logout = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Logout Done!",
        });
    } catch (error) {
        res.status(400).json({
            message: "Error logging out!",
            success: false,
        });
    }
}