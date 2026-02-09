const postModel = require('../models/postModel');

exports.createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        const post = new postModel({
            title, body
        })

        const savedPost = await post.save();

        res.json({
            post:savedPost
        })

    }
    catch(err) {
        return res.status(400).json({
            message : "error "
        })
    }
}

exports.getPosts = async(req, res) => {
    try{
        const posts = await postModel.find().populate("comment").populate('like').exec()
        res.json({
            posts: posts
        })
    }
    catch(err){
        return res.status(400).json({
            message : "error "
        })
    }
}