import db from "./connection.js";

const isDeleteMode = process.argv.includes ("delete")

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS users;`);
}

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
)
`);

const insert = `INSERT INTO users (username, password) VALUES (?,?)`;

const [select] = `SELECT * FROM users WHERE username = ?`;

export {insert, select}