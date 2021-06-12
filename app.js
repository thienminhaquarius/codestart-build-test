var express = require('express');
var app = express();
var tuc = require('temp-units-conv');

app.get('/', function (req, res) {
  res.send({
    "Output": "Hello World edited!",
    "temp": tuc.k2c(373.15)
  });
});

app.post('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
