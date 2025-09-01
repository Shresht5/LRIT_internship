import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'

dotenv.config()
const app = express();
const mongooseUrl = process.env.MONGO_URL;

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
app.use(express.json());

app.use('/api', userRouter);

// app.post('/api/signup', async (req, res) => {
//     try {
//         const { UName, UPass } = req.body;
//         const user = await userModel.findOne({ UName });
//         if (user) {
//             return res.status(400).json({ success: false, msg: "User already exists" });
//         }
//         if (!user) {
//             const createUser = new userModel({ UName, UPass })
//             await createUser.save();
//             return res.json({ success: true, msg: "user createed", UName: UName });
//         }
//     } catch (err) {
//         console.log(err);

//         return res.status(500).json({ success: false, msg: "Internal server error" });
//     }
// })
// app.post('/api/login', async (req, res) => {
//     try {
//         const { UName, UPass } = req.body;
//         const user = await userModel.findOne({ UName });
//         if (!user) {
//             return res.status(300).json({ success: false, msg: "user not found" });
//         }
//         if (UPass !== user.UPass) {
//             return res.status(300).json({ success: false, msg: "wrong password" });
//         }
//         return res.json({ success: true, msg: "user login", UName: UName });
//     } catch (err) {
//         return res.status(500).json({ success: false, msg: "Internal server error" });
//     }
// })
// app.post('/api/check', async (req, res) => {
//     try {
//         const { UName } = req.body;
//         const user = await userModel.findOne({ UName })
//         if (user) {
//             return res.json({ success: true, msg: "user exist", UName: UName });
//         }
//     } catch (err) {
//         return res.status(500).json({ success: false, msg: "Internal server error" });

//     }
// })

app.get("/api", (req, res) => {
    res.status(200).json({ success: true, message: "!Hello World" })
})
app.listen(9090, () => { console.log('server is runing on 9090') })