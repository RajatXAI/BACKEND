const express = require("express");
const followController = require("../controllers/follow.controller");
const identifyUser = require("../middlewares/post.middleware");

const followRoute = express.Router(); // create a follow router using express.Router() 



/**
 * 
 * @route post /api/follow/:userId -> username is required in the params  and user id is required in the body  
 * @description Follow a user by username and check if the user is exists and check if the user is already following the user and if not then follow the user and send the response to the client  
 * @access Private using middleware identifyUser to verify the user and followController.followUserController to follow the user and send the response to the client  
 * 
 */

followRoute.post("/follow/:username", identifyUser, followController.followUserController);

/**
 * 
 * @route post /api/follow/:userId 
 * @description Unfollow a user
 * @access Private 
 * 
 */

followRoute.post("/unfollow/:username", identifyUser, followController.unfollowUserController)



module.exports = followRoute
