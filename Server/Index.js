import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import connect from './db/connect.js'
import productRoute from "./router/productRoute.js"
import userRoute from "./router/userRoute.js"
import orderRoute from "./router/orderRouter.js"
import { addData, addDataToMongo } from '../Server/db/data.js'
dotenv.config();



const app = express();
const PORT = process.env.PORT 

app.use(cors());
app.use(express.json())


connect();
app.use('/api', productRoute)
app.use('/api/postdata/', addData)
app.use('/api/user', userRoute)
app.use('/api/order', orderRoute)


app.get("/", (req, res) => {
    res.json({msg: "server is running......"})
})

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})
