const express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.send("success");
});

app.listen(3000 || process.env.port, () => {
    console.log("Mafia Web Server Running!")
});