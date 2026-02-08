const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = () => { // function to connect with db
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