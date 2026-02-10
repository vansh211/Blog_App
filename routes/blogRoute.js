const express = require('express');
const router = express.Router();

// import controllr
const {addComment} = require('../controllers/commentController');
const {createPost} = require('../controllers/postController');
const {getPosts} = require('../controllers/postController')
const {likePost} = require('../controllers/likeController')
const {unlikePost} = require('../controllers/likeController')
const {deleteComment} = require('../controllers/commentController')

//create mapping
router.post("/comment", addComment);
router.post("/post", createPost);
router.get("/getPosts", getPosts);
router.post("/like", likePost)
router.post("/unlike", unlikePost)
router.post("/uncomment", deleteComment)

// export the routes
module.exports = router;