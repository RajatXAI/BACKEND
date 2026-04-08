/*
    -> Server ko create karna 
    -> Server ko config karna
*/

const express  = require("express")
const noteModel = require("./models/note.model")

const app = express()

app.use(express.json())

// - Post /api/notes
// - crate new note and save data in monnoDB
// - req.body = {useNmae, email}

app.post("/api/note", async(req, res) =>{
    
    // Data ko Deconstruct karna req.body se variabes me dena 
    const {
        userNmae, 
        email
    } = req.body

    // Database me value store karna with the help of noteMode.create({})
    const note = await noteModel.create({
        userNmae,
        email
    })

    // response status send karna 
    res.status(201).json({
        message: "Note created successfully",
        note
    })

})

// - Get /api/note
// - Fetch all the notes data from mongoDB and send them in the response

app.get("/api/note", async (req,res) =>{
   const note =  await noteModel.find()

   res.status(200).json({
    message:"notes fatch successfully",
    note
   })
})


// - Delete /api/note/:id
// - Delete note with id from req.params

app.delete("/api/note/:id", async(req,res) =>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "note deleted successfully"
    })
})

// - Patch /api/note/:id
// - Update the email of the note by id
// - req.body = {email}

app.patch("/api/note/:id", async(req,res) =>{
    const id = req.params.id
    const {email} = req.body

    await noteModel.findByIdAndUpdate(id, {email})

    res.status(200).json({
        message: "Note updated successfully"
    })
})


module.exports = app