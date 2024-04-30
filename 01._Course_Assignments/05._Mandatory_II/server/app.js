import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {insert, select} from './database/setupDatabase.js'
import db from "./database/connection.js";

const app = express()
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

function generateAccessToken(user) {
    return jwt.sign(user, JWT_SECRET, { expiresIn: '15m' });
}

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: '*'
}));

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ message: "A token is required for authentication" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({ message: "Invalid Token" });
    }
    next();
}

app.get('/', verifyToken, (req, res) => {
    res.status(200).json("Access to protected data");
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await db.run(insert, [username, hashedPassword]);
        res.status(201).json({ id: result.lastID });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    db.get(select, [username], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).send("No user found with that username.");
        }

        const passwordIsValid = await bcrypt.compare(password, user.password); 
        if (passwordIsValid) {
            const token = generateAccessToken({ id: user.id });
            res.json({
                message: "Login successful",
                token: token,
            });
            console.log("it worked");
        } else {
            res.status(401).send("Invalid Password");
        }
    });
});

app.get('/protected', verifyToken, (req, res) => {
    res.status(200).send("Welcome to the protected route!");
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on PORT:" + PORT))