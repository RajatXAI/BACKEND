const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req,res)=>{
    notes.push(req.body)
    // console.log(notes)
    res.status(201).json({
        message : "Note Created Successfully"
    })
})

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes: notes
    })
})

app.delete("/notes/:index", (req, res)=> {
    delete notes[req.params.index]
    res.status(204).json({
        message : "Notes Deleted Successfully"
    })
})
// 204 do not send any message 

app.patch("/notes/:index", (req, res) =>{
    notes[req.params.index].userName = req.body.userName
    notes[req.params.index].email = req.body.email
    res.status(200).json({
        message : "Note updates Successfully"
    })
})
module.exports = app;