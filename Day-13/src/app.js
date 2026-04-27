const express = require("express");
const cookieParser = require("cookie-parser");

/* require routes from routes folder */ 
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
const followRoutes = require("./routes/follow.route");


const app = express(); // create a server using express() 
app.use(express.json()); // use express.json middleware to parse the json body 
app.use(cookieParser()); // use cookie parser middleware to parse the cookie 


 /* using routes to create the api endpoints */
app.use("/api", userRoutes);  
app.use("/api", postRoutes); 
app.use("/api", followRoutes);  
module.exports = app // export the app 


