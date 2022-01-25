var express = require("express")
var app = express()

app.set("view engine", "vash")

var PORT = 3000;

app.get("/api/countries", (req, res) => {
    res.set("Content-Type", "application/json")
    res.sendFile(`${__dirname}/ten_most_populated_countries.json`)
})

app.get("/capitals", (req, res) => {
    res.render("vash/index", {canada_capitals: "capitals"})
})

app.get("/", (req, res) => {
    res.send("View JSOB feeds"+"<a href = '/ten_most_populated_countries.json'>Countries</a>")
    
})

var usedPort = process.env.PORT || port;
app.listen(usedPort, function(err, res) {
    if (err) {
        console.log("Server Error!")
    } else {
        console.log("Server started and listening on port:" + PORT)
    }
})