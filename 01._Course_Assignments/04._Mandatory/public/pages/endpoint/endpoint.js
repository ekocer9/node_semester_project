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
 