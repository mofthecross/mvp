var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Gif Schema;
var GifSchema = new Schema({
  url: String,
  visits: Number,
  title: String,
  tag: String
});

// GifSchema.pre('save ', function(next) {
//  next();
// });

var Gifs = module.exports = mongoose.model('Gifs', GifSchema);

module.exports.getGifs = function(callback, limit) {
  // Gifs.collection.remove();
  Gifs.find(callback).limit(limit);
}

// module.exports.emptyGifs = function(callback) {
// }

//add Gif
module.exports.saveGif = function(gifObject, callback) {
  var newGif = new Gifs({
    url: gifObject.url,
    tag: gifObject.tag
  });

  newGif.save(function(err, newGif) {
    if (err) {
      console.log(err)
    }
    console.dir(newGif);
  })
}
