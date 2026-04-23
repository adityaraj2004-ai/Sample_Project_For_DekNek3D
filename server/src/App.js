import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

app.set("trust proxy", 1);
app.use(cors({
    origin: process.env.CLIENT_URI,
    credentials: true,
}))


app.use(cookieParser())

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }))
app.use(express.static("public"))


// import routes
import authRouter from "./routes/user.routes.js";

// routes decalaration
// http://localhost:8000/users/register => this is how the routes are working 
app.get("/", (req, res) => {
    res.send("API is running");
});
app.use("/api/v1/users", authRouter)  // this is our api and it is its version 1, and it works with users

export default app;