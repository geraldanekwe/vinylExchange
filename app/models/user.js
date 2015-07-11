var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  user: {
    email: String,
    username: String,
    password: String
  }
});

module.exports = mongoose.model('User', userSchema);
