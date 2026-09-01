// import dotenv from "dotenv";
// dotenv.config();

import mongoose from "mongoose";

// const url = process.env.DB_URL;

async function connectDB (){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to the DB successfully");
    } catch (error) {
        console.error("Error connecting to the Data Base: ", error);
    }
}

export default connectDB;

/*if using 
    export default connectDB => import connectDb from "/config/db.js"

but if we use
    module.exports = {
        connectDB,
    }
 => const {connectDb} = require("/config/db") */