// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path: './env'})

connectDB()









/*
import express from "express";
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on(error, (err) => { 
            console.log("Error connecting to Database: ",err)
            throw error
        }
    )

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error('Error: ', error)
        throw err
    }
})()
*/
