var express = require('express');
var app = express();
require('dotenv').config()

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

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