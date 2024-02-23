const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/greeting", (req, res) => {
    const providedName = req.params.name;
    if (knownNames.includes(providedName)) {
        res.send({ data: `Hello ${providedName}!` });
    } else {
        res.send({ data: "Hello stranger!" });
    }
});

const knownNames = ["Enes", "Peter", "Morten"]

app.get("/knownPeople", (req, res) => {
    res.send({data: knownNames.length})
})


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));