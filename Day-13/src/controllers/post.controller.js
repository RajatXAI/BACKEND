const postModel = require("../model/post.model");
const ImageKit= require('@imagekit/nodejs');
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken"); 

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



module.exports = {

    createPostController
    
}