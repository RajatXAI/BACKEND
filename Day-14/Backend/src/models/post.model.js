const mongoose = require("mongoose"); // require the mongoose library 

const postsSchema = new mongoose.Schema({ // create a post schema using mongoose.Schema() 

    caption:{
        type: String,
        default: ""
    },
    imgUrl:{
        type: String,
        required: [true, 'imgUrl is required for creating an post']
    },
    user:{
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user id required for creating an post"]
    }
})

const postModel = mongoose.model("post", postsSchema); 

module.exports = postModel // export the post model using mongoose.model() 