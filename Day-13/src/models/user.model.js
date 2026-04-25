const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    username :{

        type: String,
        unique: [true,"User name already exists"],
        required: [true, "User name is required"]
    },

    email:{

        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },

    password:{

        type: String,
        required: [true, "Password is required"]
    },

    bio:{


        type: String,
    
    },

    profileImage:{

        type: String,
        // default:
    }
})

module.exports = mongoose.model("User", UserSchema)

