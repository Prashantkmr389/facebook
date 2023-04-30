const User = require('../models/user');
const Post = require('../models/post');
const fs = require('fs');
const path = require('path');
const Friendship = require('../models/friendship');
const Comment = require('../models/comment');
const Like = require('../models/like');

module.exports.home = async function(req, res){
    try{
        // console.log(req.user)
        let friends;
        if(req.user){
          friends = await Friendship.find({from_user : req.user._id}).populate('to_user')
        }
        
        let users = await User.find({});
        let posts = await Post.find({})
          .sort("-createdAt")
          .populate("user")
          .populate({
            path: "comments",
            populate: {
              path: "user",
            },
            options: { sort: { createdAt: -1 } },
          })
        return res.render('home', {
            title: "Home",
            people: users,
            posts : posts,
            all_friends: friends
        });
    }
    catch(err){
        console.log('Error', err);
        return;
    }
}