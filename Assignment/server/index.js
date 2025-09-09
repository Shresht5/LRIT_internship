import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productsRouter.js'

dotenv.config()
const app = express();
const mongooseUrl = process.env.MONGO_URL;

(async function connectMongoose() {
    try {
        await mongoose.connect(`${mongooseUrl}`)
        console.log("mongoose connected")
    } catch (err) {
        console.log("unable to connect to Mongodb")
        console.log('error: ', err.message)
    }
})()

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get("/", (req, res) => { res.send("hellos!") })
app.get("/api", (req, res) => {
    res.status(200).json({ success: true, message: "!Hello World" })
})
app.listen(9090, () => { console.log('server is runing on 9090') })
