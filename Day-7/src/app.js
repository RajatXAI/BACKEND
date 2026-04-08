/*
    -> Server ko create karna
    -> Server ko config karna

*/

const express = require("express");
const noteModel = require("./models/notes.model")

const app = express(); 

app.use(express.json());


// Post API named /notes
// Create data
app.post("/notes", async(req, res) =>{
    const {userName, email } = req.body

    const note = await noteModel.create({
        userName, email
    })

    res.status(201).json({
        message : "Note created successfully",
    })
})

// Get API named /notes
// Fetch all the notes data

app.get("/notes", async(req, res) =>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetch successfully",
        notes
    })
})


module.exports = app