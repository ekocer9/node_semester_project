import db from "./connection.js";

const isDeleteMode = process.argv.includes ("delete")

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS users;`);
}

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(255) UNIQUE,
        password VARCHAR(255),
        email VARCHAR(255) UNIQUE
)
`);

const insert = `INSERT INTO users (username, password, email) VALUES (?,?,?)`;

const selectUsers = `SELECT * FROM users WHERE username = ?`;

export {insert, selectUsers}

