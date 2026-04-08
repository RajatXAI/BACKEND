
const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI) // Database se connect karne keliye URI pass karna 
    .then(()=>{
        console.log("Connected to Database")
    })
}

module.exports = connectToDB