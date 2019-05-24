var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//app.use(express.static(_dirname + "/public"));

app.get("/", function(request, response) {
    response.send("this will be the landing page");
});

app.get("/about", function(request, response) {
    response.send("this will be the about page");
});

app.get("/portfolio", function(request, response) {
    response.send("this will be the portfolio page");
});

app.get("/contact", function(request, response) {
    response.send("this will be the contact page");
});

app.get("*", function(request, response) {
    response.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server has started for John's website");
})