const mongoose = require("mongoose"); // require the mongoose library 

const followSchema = new mongoose.Schema({ // create a follow schema using mongoose.Schema() 

    follower:{
        type: String,
    },
    follow:{
        type: String,
    },
    status:{
        type: String,
        default: "pending",
        enum:{
            values : ["pending", "accepted", "rejected"],
            message: "status can only be pending, accepted, rejected"
        }
    }

}, {

    timestamps: true
})

followSchema.index(
    
    { follower: 1, follow: 1,},
    { unique: true}

)

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;      // export the follow model using mongoose.model() 