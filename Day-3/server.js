const express = require("express");

const app = express();
app.use(express.json()); // Middleware for read json content.Before use set route and API creation.

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})

app.get("/notes", (req, res) => {
    res.send(notes)
})


app.listen(3000, () => {
    console.log("Server is running on port:3000");
})