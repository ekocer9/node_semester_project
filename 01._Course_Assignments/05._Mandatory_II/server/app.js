import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { insert, selectUsers } from './database/setupDatabase.js';
import db from './database/connection.js';

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

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await db.run(insert, [username, hashedPassword, email]);
        res.status(201).json({ id: result.lastID });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post('/login', async (req, res) => {
    console.log("Received login request");
    const { username, password } = req.body;
    console.log(username);
    try {
        const user = await db.get(selectUsers, [username]);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (passwordIsValid) {
            const token = generateAccessToken({ id: user.id });
            res.json({
                message: "Login successful",
                token: token,
            });

            sendLoginEmail(user.email).catch(err => console.error("Failed to send email:", err));
        } else {
            res.status(401).json({ message: "Invalid Password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

async function sendLoginEmail(email) {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "elena.bradtke50@ethereal.email",
            pass: "3xADE3pak6ES2fqeYE",
        },
    });
    
    const msg = {
        from: '"The Svelte Mandatory" <SvelteAuth@Authorization.test>', 
        to: email, 
        subject: "Authorization ✔", 
        text: "Hail and well met, \n Thou hast successfully gained entrance through the portal. Authorization hath been granted unto thee. Proceed with heartiness, as thy access to the treasures within is now assured. \n Venture forth with valor!",
    }
        const info = await transporter.sendMail(msg);
        console.log("Message sent: %s", info.messageId);  
}

app.get('/protected', verifyToken, (req, res) => {
    res.status(200).send("Welcome to the protected route!");
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on PORT:" + PORT))