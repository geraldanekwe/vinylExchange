var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  user: {
    email: String,
    username: String,
    password: String,
    inventory: [{
      artist: String,
      album: String,
      year: String
    }]
  }
});

module.exports = mongoose.model('User', userSchema);
