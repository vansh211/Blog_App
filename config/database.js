const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = () => {
    try{
        mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    }
    catch(err){
        console.log(err); 
        process.exit(1);
    }
}

module.exports = dbConnect;