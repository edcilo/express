var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
