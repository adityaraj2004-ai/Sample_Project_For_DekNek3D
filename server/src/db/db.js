import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB= async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\nDatabase connected successfully...`)
    } catch (error) {
        console.error("Problem in connecting DataBase: ", error.message);
        process.exit(1);
    }
}


