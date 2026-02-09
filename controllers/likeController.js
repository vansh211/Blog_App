const likeModel = require('../models/likeModel');
const postModel = require('../models/postModel');

exports.likePost = async(req, res) => {
    try{
        const{post, user} = req.body;
        const like = likeModel({
            post, user
        })

        const savedLike = await like.save();

        const updatedPost = await postModel.findByIdAndUpdate(post, {$push : {like : savedLike._id}}, {new : true})
        .populate("like").exec()


        res.json({
            post : updatedPost
        })
    }
    catch(err) {
        res.json({
            error : "Error"
        })
    }
}

exports.unlikePost = async(req, res) => {
    
    try{
        const {post, like} = req.body;
        const unlike = await likeModel.findOneAndDelete({post:post, _id:like});

        const updatedPost = await postModel.findByIdAndUpdate(post, {$pull: {like: unlike._id}}, {new:true})

        res.json({
            post : updatedPost
        })
    }
    catch(err){
        re.json({
            err : "eroor"
        })
    }
}