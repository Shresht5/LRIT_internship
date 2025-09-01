import express from "express";
import { userModel } from '../models/userModel.js'

const Router = express.Router();

Router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, msg: "User already exists" });
        }
        if (!user) {
            const createUser = new userModel({ email, password })
            await createUser.save();
            return res.json({ success: true, msg: "user createed", email: email });
        }
    } catch (err) {
        console.log(err);

        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
});

Router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(300).json({ success: false, msg: "user not found" });
        }
        if (password !== user.password) {
            return res.status(300).json({ success: false, msg: "wrong password" });
        }
        return res.json({ success: true, msg: "user login", email: email });
    } catch (err) {
        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
})

Router.post('/check', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email })
        if (user) {
            return res.json({ success: true, msg: "user exist", email: email });
        }
    } catch (err) {
        return res.status(500).json({ success: false, msg: "Internal server error" });

    }
})
export default Router;