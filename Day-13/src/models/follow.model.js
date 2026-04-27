const mongoose = require("mongoose"); // require the mongoose library 

const followSchema = new mongoose.Schema({ // create a follow schema using mongoose.Schema() 

    follower:{
        type: String,
    },
    follow:{
        type: String,
    },

}, {

    timestamps: true
})

followSchema.index(
    
    { follower: 1, follow: 1,},
    { unique: true}

)

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;      // export the follow model using mongoose.model() 