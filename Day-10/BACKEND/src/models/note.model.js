const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    userName : String,
    email : String
})

const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel