const followModel = require("../models/follow.model");




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

    const isFollowExists = await followModel.findOne({

        username : followUserName
    })

    if(!isFollowExists){

        return res.status(404).json({

            message: `User you are trying to follow ${followUserName} does not exist`
        })
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


module.exports = {

    followUserController,
    unfollowUserController
}