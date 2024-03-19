const express = require("express");

const app = express();

app.use(express.static("public"))

//en måde at exportere
//const helicopterFactoryFile = require("./util/helicopterFactory.js")
//console.log(helicopterFactoryFile.helicopterFactory());


//en måde at exportere
const {helicopterFactory} = require("./util/helicopterFactory.js")
console.log(helicopterFactory());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/treasuretrove", (req, res) => {
    res.send({ data: "you found it!" })
})

app.get("/secretpassphrase", (req, res) => {
    // task: Get the passphrase from the query string and compare it below
    if(req.query.passphrase != "sesameOpenUp") {
        res.status(400).send({ data: "Wrong passphrase"})
    } else {
        res.redirect("treasuretrove")
    }
})

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

app.get("/proxy", (req, res) => {
    //asignment: Request the https://www.google.com home page and serve it as a response
    fetch("https://www.google.com")
    .then((response) => response.text())
    .then((result) => res.send(result));
})




const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));