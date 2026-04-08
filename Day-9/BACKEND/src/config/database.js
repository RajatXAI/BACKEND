const mongoose = require("mongoose")

function connectToDB(){

    mongoose.connect(process.env.MONGO_URI) // Pass URI, and process.env ka kam hai jo .env file me varibale create kiya hai ush varibale ko access karne ke liye use karte hai 
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = connectToDB