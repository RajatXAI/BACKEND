require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/db")

let port = 3000


connectToDB()
app.listen(port, () =>{
    console.log("Sever is running on port: ",port)
})

