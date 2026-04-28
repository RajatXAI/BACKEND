const followModel = require("../models/follow.model");
const userModel = require("../models/user.model")




async function followUserController(req, res){

    const followerUserName = req.user.username
    const followUserName = req.params.username

    if(followUserName == followerUserName){

        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({

        follower: followerUserName,
        follow: followUserName
    })

    if(isAlreadyFollowing){

        return res.status(200).json({

            message: `You are already following ${followUserName}`,
            follow: isAlreadyFollowing
        })
    }

    const isUserExists = await userModel.findOne({

       username: followUserName
    });
  
    if (!isUserExists) {
      return res.status(404).json({
          message: `User you are trying to follow ${followUserName} does not exist`
      });
     }

    const followRecord = await followModel.create({

        follower: followerUserName,
        follow: followUserName
    })

    res.status(201).json({

        message: `You are now following ${followUserName}`,
        follow: followRecord
    })

}

async function unfollowUserController(req, res) {
  try {
    const followerUserName = req.user.username;
    const followUserName = req.params.username;

    const followRecord = await followModel.findOne({
      follower: followerUserName,
      follow: followUserName
    });

    if (!followRecord) {
      return res.status(404).json({
        message: `You are not following ${followUserName}`
      });
    }

    await followModel.deleteOne({
      follower: followerUserName,
      follow: followUserName
    });

    res.status(200).json({
      message: `You have unfollowed ${followUserName}`
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

async function statusUserController(req, res) {
  try {
    const currentUser = req.user.username;       // jisne login kiya
    const requesterUser = req.params.username;  // jisne request bheji
    const status  = req.body?.status;

    // valid status check
    if (status !== "accepted" && status !== "rejected") {
      return res.status(400).json({
        message: "Status must be accepted or rejected"
      });
    }

    // request find karo
    const followRequest = await followModel.findOne({
      follower: requesterUser,
      follow: currentUser,
    });

    if (!followRequest) {
      return res.status(404).json({
        message: "Pending follow request not found"
      });
    }

    // update status
    followRequest.status = status;
    await followRequest.save();

    res.status(200).json({
      message: `Follow request ${status}`,
      follow: followRequest
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}



module.exports = {

    followUserController,
    unfollowUserController,
    statusUserController
}