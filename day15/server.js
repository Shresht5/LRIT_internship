import http from "http";
import fs from 'fs';

const filePath = "./Users.json";

function readFile() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function writeFile(inData) {
    fs.writeFileSync(filePath, JSON.stringify(inData, null, 2))
}

http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (req.method === "GET" && req.url === "/") {
        const Users = readFile();
        res.end(JSON.stringify(Users));
    }
    //SignUP
    if (req.method === "POST" && req.url === "/signup") {
        let body = "";
        req.on("data", chunk => { body += chunk; })
        req.on("end", () => {
            const newUser = JSON.parse(body);
            const Users = readFile();
            if (Users.find(u => u.email === newUser.email)) {
                res.writeHead(400)
                return res.end(JSON.stringify({ success: false, message: "user already exist" }))
            }
            newUser.id = Users.length ? Users[Users.length - 1].id + 1 : 1;
            Users.push(newUser);
            writeFile(Users);
            res.writeHead(201)
            return res.end(JSON.stringify({ success: true, message: "User created", UserEmail: newUser.email }));
        })
    }
    //Login
    if (req.method === "POST" && req.url === "/login") {
        let body = "";
        req.on("data", chunk => { body += chunk; })
        req.on("end", () => {
            const inputUser = JSON.parse(body);
            const Users = readFile();
            const foundUser = Users.find(u => u.email === inputUser.email)
            if (foundUser) {
                if (foundUser.password === inputUser.password) {
                    res.writeHead(200)
                    return res.end(JSON.stringify({ success: true, message: "user login", email: inputUser.email }))
                }
                res.writeHead(300)
                return res.end(JSON.stringify({ success: false, message: "wrong password" }));
            }
            res.writeHead(400)
            return res.end(JSON.stringify({ success: false, message: "User not exist" }));
        })
    }
}).listen(8080, () => { console.log('serve is running on 8080') });
