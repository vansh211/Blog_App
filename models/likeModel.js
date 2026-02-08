const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
    post:{
        type : mongoose.Schema.Types.ObjectId, // to define the type of another model
        ref:"Post" // refer to post model
    },
    user:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("like", likeSchema);
