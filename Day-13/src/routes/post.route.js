const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const identifyUser = require("../middlewares/post.middleware")


const upload = multer({
    
    Storage: multer.memoryStorage()
})

postRouter.post("/post", identifyUser, upload.single("image"), postController.createPostController);

postRouter.get("/getpost", identifyUser, postController.getPostController)
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailController)


module.exports = postRouter