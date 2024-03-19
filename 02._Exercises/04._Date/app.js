const express = require('express');

const app = express();

//UTC
console.log(new Date());

//Unix Epoch Time (Seconds since 1970 jan. 1st)
console.log(Date.now());

//Local time (in my case right now and her CEST GMT+0100)
console.log(Date());

// assignment create a route /date that returns the date
app.get("/date", (req, res) => {
    const date = Date();
    res.send({data: date})
})

//assignment create a route with the endpoint /month
//assignment that returns the current month

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"]

app.get("/month/version1", (req, res) => {
    const monthIndex = new Date().getMonth();
    res.send({data: months[monthIndex]});
}) 

app.get("/month/version2", (req, res) => {
    const month = new Date().toLocaleDateString("en-us", {month: "long"});
    res.send({data: month});
}) 

app.get("/month/version3", (req, res) => {
    const monthName = Date().split(" ")[1];
    res.send({data: monthName});
}) 

// assignment get today on /day i will solve it with version1's technique

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

app.get("/day", (req, res) => {
    const today = weekDays[new Date().getDay];
    res.send({data: today});
})


app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
        return;
    }
    console.log("Server is running on port", 8080);
});
