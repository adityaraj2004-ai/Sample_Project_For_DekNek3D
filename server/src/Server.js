
import dotenv from "dotenv";
dotenv.config()

import express from "express";
import { connectDB } from "./db/index.js";
import mongoose from "mongoose";
import app from "./App.js";



const startServer = async()=>{
try {
     await connectDB();
     app.listen(process.env.PORT, ()=>{
        console.log(`Server started at ${process.env.PORT}`)
     })

} catch (error) {
    console.error("Error Connecting Server: ", error.message)
    process.exit(1)
}
}
startServer();