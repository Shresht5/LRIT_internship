import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
const mongooseUrl = 'mongodb+srv://Shresht5:ola12345@projexts.6zfcpf7.mongodb.net/yetun?retryWrites=true&w=majority&appName=projexts';

(async function connectMongoose() {
    try {
        await mongoose.connect(`${mongooseUrl}`)
        console.log("mongoose connected")
    } catch (err) {
        console.log("unable to connect to Mongodb")
        console.log('error: ', err)
    }
})()

app.use(cors());
app.use(express.json())

app.get("/api", (req, res) => {
    res.status(200).json({ success: true, message: "!Hello World" })
})
app.listen(9090, () => { console.log('server is runing on 9090') })