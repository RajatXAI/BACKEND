require("dotenv").config() // load the environment variables from the .env file 
const app = require("./src/app") // require the app from the app.js file 
const connectToDB = require("./src/config/db") // require the connectToDB function from the db.js file 

let port = 3000 // set the port to 3000 


connectToDB() // connect to the database 
app.listen(port, () =>{ // listen to the port 
    console.log("Sever is running on port: ",port)
})

