var express = require('express');
var app = express();
var bodyParser = require("body-parser");
require('dotenv').config()

// challenge
console.log("Hello World");

// challenge
app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

// challenge
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// challenge
const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});

// challenge
app.get("/name", (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
      });

});


// challenge
app.get("/:word/echo", (req, res) => {
  var { word } = req.params;
  res.json({
    echo: word
  });
});

// challenge
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

// challenge
app.get("/json", (req, res) => {

  var response = "Hello json"
  if (process.env.MESSAGE_STYLE == "uppercase") {
      response = response.toUpperCase();
  }
  res.json({
    message: response
  });
})



module.exports = app;