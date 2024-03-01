import express from "express";

const app = express();

app.use(express.static("public"))

import path from "path"

import getMatches from "./util/matches.js";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/homepage/homepage.html"))
})

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/pages/matches/matches.html"))
})

app.get("/api/matches", (req, res) => {
    const matches = getMatches()
    res.send({data: matches})
})

// assignment: create a contact page
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("public/pages/contact/contact.html"))
})





const port = 8080
app.listen(port, () => console.log("Server is running on port", port));