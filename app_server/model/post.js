const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        firstName : {
            type : String,
            requried: true,
        },
        lastName : {
            type : String,
            requried: true,
        },
        title : {
            type : String,
            maxlength : 10,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        picturePath : String,
    },
    {timestamps : true}
);

const Post = mongoose.model("Post",postSchema);

module.exports = Post;