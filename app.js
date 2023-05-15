const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./src/routes/movieRoutes.js')
app.use('/', routes)

// app.get('/', function(request, response){
//     return response.send("hello world");
// });

app.listen(port, function(){
    console.log("server has started");
});
