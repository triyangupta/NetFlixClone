// const express = require('express')
import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors";

dotenv.config({
    path:".env"
})

databaseConnection()

const app = express();
// middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions))

//api
app.use("/api/v1/user",userRoute)   // http://localhost:8080/api/v1/user/register
// app.use("/app/v1/user",Register)
// app.use("/api/v1/user",Login)

app.listen(process.env.PORT, () => {
    console.log(`Server connect at port: ${process.env.PORT}`)
})