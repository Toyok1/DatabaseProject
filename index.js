const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render("home");
})

app.listen(3000,()=>{
    console.log("app now listening on port 3000");
})