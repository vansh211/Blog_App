const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    body : {
        type : String,
        require : true
    },
    like : [{
        type:mongoose.Schema.Types.ObjectId, //to define the type is of another schema id
        ref :"like" // refer to Like named schema
    }],
    comment : [{
        type:mongoose.Schema.Types.ObjectId, //to define the type is of another schema id
        ref :"comment" // refer to comment named schema
    }]
})

module.exports = mongoose.model("Post", postSchema); // export