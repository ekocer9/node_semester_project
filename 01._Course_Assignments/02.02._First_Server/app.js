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

const currentId = 5;

app.post("/addDrinks", (req, res) => {
    /*const newDrink = {
        id: drinks.length + 1,
        name: req.body.name
    };*/

    const newDrink = reg.body;
    //newDrink.id = currentId++; //giver fejl
    //newDrink.id = ++currentId; // en løsning
    // currentId++; // en løsning
    newDrink.id = nextId++;

    drinks.push(newDrink);

    res.send({ data: newDrink});
});

app.put("/updateDrinks/:drinkId", (req, res) => {
    const drinkId = Number(req.params.drinkId);
    const drinkIndex = drinks.findIndex(d => d.id === drinkId);
    const newName = req.body.name;

    if (drinkIndex >= 0) {
        drinks[drinkIndex].name = newName; 
        res.send({ data: drinks[drinkIndex] });
    } else {
        res.status(404).send({ error: "Drink not found" });
    }
});

app.delete("/drinks/:drinkId", (req, res) => {
    const drinkId = Number(req.params.drinkId);
    const drinkIndex = drinks.findIndex(d => d.id === drinkId);

    if (drinkIndex >= 0) {
        const deletedDrink = drinks.splice(drinkIndex, 1);
        res.send({ data: deletedDrink[0] });
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

