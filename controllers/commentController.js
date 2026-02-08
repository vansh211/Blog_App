//imports models we use
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

// logic main

exports.addComment = async(req,res) => {
    try{
        const{post, user, body} = req.body;

        const comment = new Comment({
            post,user,body
        })

        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comment: savedComment._id}}, {new:true} )
                .populate("comment")
                .exec();

                res.json({post : updatedPost})
    }
    catch(err){
        res.status(500).json({
            error : "Error while comment"
        })
    }
}
