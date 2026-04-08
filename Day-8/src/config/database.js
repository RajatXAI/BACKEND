const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI) // Pass URI , process.env ka kam hai jo .env file me variable create kiya hai ush variable ko access karne ke liye use karte hai 
    .then(()=>{
        console.log("Connected to DB")
    })
}


module.exports = connectToDB