const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
  UserId: { type: String, default: uuid.v4, unique: true },
  Name: { type: String, require: true },
  LastName: { type: String, require: true},
  Email: { type: String, require: true},
  LastConnexion: { type: String},
});

module.exports = mongoose.model('User', userSchema);