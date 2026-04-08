/*
    -> dotenv file ko config karna 
    -> Server ko start karna
    -> Database se connect karna

*/
require("dotenv").config()
const app = require("./src/app");
const connectToDB = require("./src/config/database");

// Database ko call karna for connecting Database.
connectToDB()


// Server Start karna 
app.listen(3000, () =>{
    console.log("Server is running  on port number : 3000")
} )