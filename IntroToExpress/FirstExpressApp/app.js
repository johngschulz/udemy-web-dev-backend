var express = require("express");
var app = express();

// "/" = "Hi"
app.get("/", function(req, res){
    res.send("hi there");
})

// "/bye" = "bye"
app.get("/bye", function(req, res){
    res.send("goodbye");
})
// "/dog" = "meow"
app.get("/dog", function(req, res){
    console.log("someone made a request to /dog");
    res.send("Meow");
})

// '*' catchall'
app.get("*", function(req, res){
    res.send("You are a Star!");
})



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});