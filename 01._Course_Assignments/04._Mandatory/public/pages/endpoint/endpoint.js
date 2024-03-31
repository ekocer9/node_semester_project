// --------FETCH----------

const fetch = [
    "router.post('api/contact', (req,res) => { \n   console.log(req.body) \n    res.redirect('/') \n    });",
    "router.get('/api/matches', async (req, res) => { \n   const matches = await getMatches(); \n   res.send({ data: matches }); \n     });"
 ]
 
 function updateFetch() {
     const factIndex = Math.floor(Math.random() * fetch.length);
     document.getElementById('fetchExercises').innerHTML = fetch[factIndex];
 }

 setInterval(updateFetch, 5000)
 updateFetch()
 
//--------Endpoints----------

const endpoint = [
    "app.get('/drinks', (req, res) => { \n  res.send({data: drinks}); \n })",
    "app.post('/addDrinks', (req, res) => { \n   const newDrink = reg.body; \n   newDrink.id = nextId++; \n   drinks.push(newDrink); \n   res.send({ data: newDrink}); \n});",
    "app.put('/updateDrinks/:drinkId', (req, res) => { \n   const drinkId = Number(req.params.drinkId); \n  const drinkIndex = drinks.findIndex(d => d.id === drinkId); \n  const newName = req.body.name; \n   if (drinkIndex >= 0) { \n     drinks[drinkIndex].name = newName; \n     res.send({ data: drinks[drinkIndex] }); \n  } else { \n     res.status(404).send({ error: 'Drink not found' }); \n  } \n });",
    "app.delete('/drinks/:drinkId', (req, res) => { \n  const drinkId = Number(req.params.drinkId); \n  const drinkIndex = drinks.findIndex(d => d.id === drinkId); \n      if (drinkIndex >= 0) { \n   const deletedDrink = drinks.splice(drinkIndex, 1); \n   res.send({ data: deletedDrink[0] }); \n     } else { \n   res.status(404).send({ error: 'Drink not found' }); \n    } \n});"
 ]
 
 function updateEndpoint() {
     const factIndex = Math.floor(Math.random() * fetch.length);
     document.getElementById('endpointExercises').innerHTML = endpoint[factIndex];
 } 
 
 setInterval(updateEndpoint, 5000)
 updateEndpoint()