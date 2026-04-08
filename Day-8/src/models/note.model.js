const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    Username: String,
    email: String

})

const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel