import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: "server is running fine" });
})

app.listen(8080, () => {
    console.log('server is running on 8080')
})