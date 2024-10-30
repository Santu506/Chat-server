import {server} from "./app.js";
import { connectDB } from "./db/connectDb.js";
import dotenv from "dotenv";
// import express from "express";
// const app = express();
dotenv.config({ path: "./.env" });

connectDB()
.then(() => {
    server.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT } in ${process.env.NODE_ENV} mode`);
    });
})
.catch((err) =>{
    console.log(`MongoDB connection error: ${err}`);
});

