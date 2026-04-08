/*
     
    -> Server ko create karna 

*/

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())


/* 

    - POST API
    - Route/Endpoint -> /api/notes
    - middleware already used 

*/

app.post("/api/notes", async(req, res) =>{

    // Destructuring the data from req.body and assign it object variables
    const{
        userName,
        email
    } = req.body

    // Does data store
    const note = await noteModel.create({
        userName,
        email
    })

    // send the response
    res.status(201).json({
        message : "Note Created Successfully",
        note
    })
})


/* 

    - GET API
    - Route/Endpoint -> /api/notes
    - Fetch all data from the database

*/

app.get("/api/notes", async(req, res) =>{

    const notes = await noteModel.find()

    res.status(200).json({
        message: "Fatch notes successfully",
        notes
    })
})


/*

    - DELETE API
    - Route/Endpoint -> /api/notes/:id
    - Detele Data from the database and send them response

*/

app.delete("/api/notes/:id", async(req, res) =>{

    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Note Deleted successfully"
    })
})


/*

    - PATCH API 
    - Route/Endpoint -> /api/noted/:id

*/

app.patch("/api/notes/:id", async (req, res) => {

    try {

        const id = req.params.id
        const { userName, email } = req.body

        const updatedNote = await noteModel.findByIdAndUpdate(
            id,
            { userName, email },
            { new: true }
        )

        res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        })

    } catch (error) {

        res.status(500).json({
            message: "Server error",
            error
        })

    }

})

module.exports = app