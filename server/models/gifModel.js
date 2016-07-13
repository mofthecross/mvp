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

var FakeGif = new Gifs({
  url: "http://45.media.tumblr.com/114fdc227514c370dafff37f3940d19e/tumblr_nzibsxvoRP1un7fp4o1_500.gif",
  // visits: 2,
  // title: "title",
  tag: "#raaaage'"
})

FakeGif.save(function(err, FakeGif) {
  if (err) {
    console.log(err)
  }
  console.dir(FakeGif);
});

//get Gifs
module.exports.getGifs = function(callback, limit) {
  Gifs.find(callback).limit(limit);
}

// module.exports.emptyGifs = function(callback) {
// }

//add Gif
module.exports.saveGif = function(gifObject, callback) {
  console.log('fuck', gifObject)
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
