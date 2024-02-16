const app = require("express") ();

const drinks = [
    { id: 1, name: "cola" },
    { id: 2, name: "pepsi" },
    { id: 3, name: "7up" },
    { id: 4, name: "fanta" },
    { id: 5, name: "Carlsberg Sport" }
];

app.get("/drinks", (req, res) => {
    res.send({data: drinks});
});


app.get("/drinks/:drinkId", (req, res) => {
    const drinkId = Number(req.params.drinkId); 
    const drink = drinks.find(d => d.id === drinkId);
    
    if (drink) {
        res.send({ data: drink.name });
    } else {
        res.status(404).send({ error: "Drink not found" });
    }
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
        return;
    }
    console.log("Server is running on port", 8080);
});