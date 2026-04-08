
/*

    We can create server
    We can config server

*/

const express = require("express");

const app = express();
app.use(express.json()) // Middleware for read json content.Before use set route and API creation.

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body);
    // console.log(notes)
    res.send("note created")
})

app.get("/notes", (req, res) => {
    res.send(notes)
})

 app.delete("/notes/:index", (req, res) =>{
    delete notes[req.params.index]
    res.send("notes deleted successfully")
 })

 app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description
    res.send("note updated successfully")
 })

module.exports = app;