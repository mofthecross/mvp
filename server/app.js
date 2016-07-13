var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');
app.use(express.static(__dirname+'/../client'));
console.log(__dirname+'../client')
// app.get()

Gifs = require('./models/gifModel');
mongoose.connect('mongodb://localhost/');
// set up db: mongod --dbpath /somedirectory

var db = mongoose.connection;

app.get('/api/gifs', function(request, res) {
  
  Gifs.getGifs(function(err, gifs) {
    if (err) {
      console.log('Unable to find gifs in server/app.js')
    }
    res.json(gifs);
  });
});

app.post('/api/gifs', function(request, res) {
  var newGif = request.body
  console.log('comeon', newGif)
  Gifs.saveGif(newGif, function(error, newGif){
    if (error) {
      console.log('Unable to save newGif')
    }
    res.json(newGif);
    })
});

app.listen(4000);
console.log('app is running on port 4000');

// module.exports = app;
