const express = require('express');
const router = express.Router();

// import controllr
const {addComment} = require('../controllers/commentController');


//create mapping
router.post("/comment", addComment);

// export the routes
module.exports = router;