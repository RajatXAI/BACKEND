const express = require("express")
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");


const app = express()
app.use(express.json());
app.use(cookieParser())


 //* POST /api/user/register
app.use("/api", userRoutes)
app.use("/api", postRoutes)


module.exports = app





