import express from "express";

const app = express();

app.use(express.static("public"))

import path from "path"

app.get("/", (req, res) => {
    res.sendFile(path.resolve("pulbic/homepage/homepage.html"))
})







const port = 8080
app.listen(port, () => console.log("Server is running on port", port));