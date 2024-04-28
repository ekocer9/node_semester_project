import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {insert} from "./database/setupDatabase"

const app = express()
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

function generateAccessToken(user) {
    return jwt.sign(user, JWT_SECRET, { expiresIn: '15m' });
}

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
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const sql = `INSERT INTO users (username, password) VALUES (?,?)`;

    db.run(sql, [username, hashedPassword], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = ?`;

    db.get(sql, [username], async (err, user) => {
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
                token: token
            });
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