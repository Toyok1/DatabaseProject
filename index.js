const express = require("express");
const app = express();
const path = require('path');
const authRoutes = require('./routes/router');

/*app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));*/
app.use(express.static(path.join(__dirname, '/')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
    res.render("home");
})

app.listen(3000,()=>{
    console.log("app now listening on port 3000");
})