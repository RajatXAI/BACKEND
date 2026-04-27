const express = require("express")
const userController = require("../controllers/user.controller")

const userRouter = express.Router() // create a user router using express.Router() 

/**
 * 
 * @route POST /api/register -> {email, username, password, bio, profileImage} email is required in the body and username is required in the body and password is required in the body and bio is required in the body and profileImage is required in the body  
 * @description Register a new user with email, username, password, bio and profileImage and send the response to the client  
 * @access Public 
 * 
 */

userRouter.post("/register", userController.registerController )

/**
 * 
 * @route POST /api/login -> {email, username, password} email is required in the body and username is required in the body and password is required in the body  
 * @description Login a user with email, username and password and send the response to the client  
 * @access Public 
 * 
 */

userRouter.post("/login", userController.loginController)



module.exports = userRouter