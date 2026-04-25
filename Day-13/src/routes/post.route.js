const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");


const upload = multer({
    
    Storage: multer.memoryStorage()
})

postRouter.post("/post", upload.single("image"), postController.createPostController);

postRouter.get("/getpost", postController.getPostController)
postRouter.get("/details/:postId", postController.getPostDetailController)


module.exports = postRouter