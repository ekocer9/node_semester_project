import db from "./connection.js";

const isDeleteMode = process.argv.includes ("delete")

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS volcanoes;`);
}

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
)
`);

const insert = `INSERT INTO users (username, password) VALUES (?,?)`;

export {insert}