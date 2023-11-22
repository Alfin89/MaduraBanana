// var methodOverride = require("method-override");
// const { v4: uuidv4 } = require("uuid");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


// Listen
app.listen(port, () => {
    console.log(`Server is running : http://localhost:${port}`)
})


// Route
app.get('/', (req, res) => {
    // res.render('pages/home')
    res.send('HOme Page')
})