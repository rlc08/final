const Post = require('../model/post');
const User = require('../model/user');

const createPost = async (req, res) => {
    try{
        console.log(req.body);
        const {userId,title, description ,picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({

            firstName : user.firstName,
            lastName : user.lastName,
            title,
            description,
            picturePath,
        })

        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post);

    } catch (err) {
        res.status(409).json({message : err.message});
    }
};

const getFeedPosts = async (req,res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);

    } catch (err) {
        res.status(409).json({message : err.message});
    }
};

const getUserPosts = async (req,res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);

    } catch (err) {
        res.status(409).json({message : err.message});
    }
};

module.exports = {getFeedPosts,createPost,getUserPosts};