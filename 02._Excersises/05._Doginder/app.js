import express from "express";

const app = express();

app.use(express.static("public"))

import getMatches from "./util/matches.js";

import {homepagePage, matchesPage, contactPage} from "./util/readPages.js"


// task: Research: how to read files in Node.js
// import fs from "fs"

app.get("/", (req, res) => {
    res.send(homepagePage)
})

app.get("/matches", (req, res) => {
    res.send(matchesPage)
})

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({data: matches})
})

// assignment: create a contact page
app.get("/contact", (req, res) => {
    res.send(contactPage)
})

app.get("/page", (req, res) => {
    res.send("")
})

const port = 8080
app.listen(port, () => console.log("Server is running on port", port));