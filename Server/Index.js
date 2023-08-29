import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import connect from './db/connect.js'
import productRoute from "./router/productRoute.js"
import { addData, addDataToMongo } from '../Server/db/data.js'
dotenv.config();



const app = express();
const PORT = process.env.PORT 

app.use(cors());
app.use(express.json())


connect();
app.use('/api', productRoute)
app.use('/api/postdata/', addData)


app.get("/", (req, res) => {
    res.json({msg: "server is running......"})
})

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})
