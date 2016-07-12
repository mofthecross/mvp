var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Gif Schema;
var GifSchema = new Schema({
  url: String,
  visits: Number,
  title: String,
  tag: String
});

GifSchema.pre('save ', function(next) {
 next();
});

var Gifs = module.exports = mongoose.model('Gifs', GifSchema);

// var FakeGif = new Gifs({
//   url: "hi",
//   visits: 2,
//   title: "title",
//   tag: "#"
// })
//
// FakeGif.save(function(err, FakeGif) {
//   if (err) {
//     console.log(err)
//   }
//   console.dir(FakeGif);
// });

//get Gifs
module.exports.getGifs = function(callback, limit) {
  Gifs.find(callback).limit(limit);
}

//add Gif
module.exports.saveGif  = function(gifObject, callback) {
  Gifs.create(gifObject, callback);
}