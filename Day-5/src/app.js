/* 
    Server ko create karna 
    Server ko config karna
*/

const express = require("express");

const app = express();
app.use(express.json());


const notes = []

// Post / notes
app.post("/notes", (req, res) => {
    notes.push(req.body);
    console.log(notes);
    res.send("note created");
})

app.get("/notes", (req, res) => {
    res.send(notes);
})

app.delete("/notes", (req, res) => {
    delete notes[req.params.index]
    res.send("Notes deleted successfully")
})

app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description
    res.send("Notes updated successfully")
})


module.exports = app;