const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const identifyUser = require("../middlewares/post.middleware")


const upload = multer({
    
    Storage: multer.memoryStorage()
})

/**
 * 
 * @route POST /api/post -> {image, caption} user id is required in the body and image is required in the body and caption is required in the body   
 * @description Create a post with image and caption and user id is required in the body and image is required in the body  
 * @access Private using middleware identifyUser to verify the user and upload.single("image") to upload the image and postController.createPostController to create the post and send the response to the client 
 * 
 */

postRouter.post("/post", identifyUser, upload.single("image"), postController.createPostController);

/**
 * 
 * @route GET /api/post -> no body required and no params required and no query required  and user id is required in the body       
 * @description Get all user's posts 
 * @access Private using middleware identifyUser to verify the user and postController.getPostController to get the posts and send the response to the client  
 * 
 */

postRouter.get("/getpost", identifyUser, postController.getPostController)

/**
 * 
 * @route GET /api/details/:postId -> user id is required in the body and postId is required in the params  
 * @description Get a post detail by postId and check if the post is belongs to the user and send the response to the client  
 * @access Private using middleware identifyUser to verify the user and postController.getPostDetailController to get the post detail and send the response to the client  
 * 
 */

postRouter.get("/details/:postId", identifyUser, postController.getPostDetailController)


/**
 * 
 * @route POST /api/like/:postId -> postId is required in the params and user id is required in the body  
 * @description Like a post by postId and check if the post is exists and check if the post is already liked by the user and if not then like the post and send the response to the client  
 * @access Private using middleware identifyUser to verify the user and likeController.likePostController to like the post and send the response to the client  
 * 
 */

postRouter.post("/like/:postId", identifyUser, postController.likePostController)


module.exports = postRouter