//imports models we use
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

// logic main

exports.addComment = async(req,res) => {
    try{
        const{post, user, body} = req.body; // extract from user req

        const comment = new Comment({
            post,user,body
        }) // create a new schema of comment type from user request

        const savedComment = await comment.save(); // usong .save() to save in db

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comment: savedComment._id}}, {new:true} ) // update in post's comment array 
                .populate("comment") //to complete show the comment 
                .exec();

                res.json({post : updatedPost})
    }
    catch(err){
        res.status(500).json({
            error : "Error while comment"
        })
    }
}

exports.deleteComment = async(req, res) => {
    try{
        const {post, comment} = req.body;
        const deleteCom = await Comment.findOneAndDelete({post:post, _id:comment});

        const deletePostCom = await Post.findByIdAndUpdate(post, {$pull: {comment: comment._id}}, {new:true})

        return res.json({
            message : "Successfull",
            post : deletePostCom
        })
    }
    catch(err){
        return res.json({
            err : "Eroor while deleting"
        })
    }
}
