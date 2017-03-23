var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        chicken: "Coo Coo Ca Cha",
        lizard: "...",
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
    
});

app.get("/repeat/:word/:num", function(req, res){
    var word = ""
    for(var i = 0; i< req.params.num; i++){
        word+= req.params.word + " ";
    }
    res.send(word);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});