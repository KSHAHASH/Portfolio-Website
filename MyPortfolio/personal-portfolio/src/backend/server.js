//importing 
// const express = require('express');
import express from "express"
import cors from "cors"

//create the instance of the express app
const app = express();

//configure the middleware to parse JSON bodies to handle form submission
app.use(express.json());
app.use(cors()); // enabling cors to allow the frontend to send requests to the backend


//Define endpoint to test the server
app.get("/", (req,res) =>{
//  res.send("Hello I am calling from the backend");
    res.json({"users":["shahash", "kandel", "animal"]})
});

const PORT = process.env.PORT ||3001
app.listen(PORT, ()=>{
    console.log(`Hi Shahash, Server is running on port 6000`);
});