const express = require('express');
const app = express(); // intance of express to use

require("dotenv").config();
const PORT = process.env.PORT || 4000; // get prt from env

app.use(express.json()); // middleware

const blogRoutes = require("./routes/blogRoute.js"); // get routes

app.use("/api/v1", blogRoutes); // moute route with api/v1


const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT, ()=> {
    console.log("Server Started");
})

