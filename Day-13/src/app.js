const express = require("express")
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.route");

const app = express()
app.use(express.json());
app.use(cookieParser())


 //* POST /api/user/register
app.use("/api/user", userRoutes)


module.exports = app





