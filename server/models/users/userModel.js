var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String
});

userSchema.methods.comparePasswords = function(password) {
  var savedPassword = this.password;
}

userSchema.pre('save', function(next) {
  var user = this;
  // You **must** do `new Error()`. `next('something went wrong')` will
  // **not** work
  bcrypt.

  var err = new Error('something went wrong');

  user.password = hash;
  user.salt = salt
  next();
});

module.exports = mongoose.model('users', usersSchema);
