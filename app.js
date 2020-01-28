const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000 || process.env.port, () => {
    console.log("Mafia Web Server Running!")
});