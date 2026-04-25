const postModel = require("../model/post.model");
const ImageKit= require('@imagekit/nodejs');
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken"); 
const { verify } = require("node:crypto");

const imagekit = new ImageKit({

    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res){

    const token = req.cookies.token
    let decoded = null;

    if(!token){
        res.send(401).json({
            message: "Token not provided, Unauthorized access"
        })
    }

    try{

        decoded = jwt.verify(token, process.env.JWT_SECRET)

    }catch (err){

        return res.status(401).json({
            message: "user not authorized"
        })
    }
    
     
    // console.log(decoded); 
   
   const file =  await imagekit.files.upload({

        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'fileName',
        folder: "Day-13-insta-clone-posts"
    });

  
    const post = await postModel.create({

        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}

async function getPostController(req, res){

    const token = req.cookies.token;
    let decoded = null;

    if(!token){
        return res.status(401).json({

            message: "UnAuthorized Access"
        })
    }

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    }catch (err){
        return res.status(401).json({
            message: "Token invalid"
        })
    }

    const userId = decoded.id
    const posts = await postModel.find({
        user: userId
    })
    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
}

async function getPostDetailController(req, res){

    const token = req.cookies.token;
    let decoded = null;

    if(!token){
        return res.status(401).json({

            message: "UnAuthorized Access"
        })
    }

    try{

        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }catch (err){

        return res.status(401).josn({
            message: "Invalid Token"
        })
    }

    const userId = decoded.id;

    const postId = req.params.postId
    const post = await postModel.findById(postId);

    if(!post){

        return res.status(404).josn({

            message: "Post not found"
        })
    } 

    const isValidUser = post.user.toString() === userId

    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden content"
        })
    }

    return res.status(200).json({
        message: "Post fetched successfully",
        post
    })
}


module.exports = {

    createPostController,
    getPostController,
    getPostDetailController
    
}