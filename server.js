const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids


const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//get request for homepage file
app.get("notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html")); 

}); 


//get request for notes page
app.get("notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html")); 

}); 