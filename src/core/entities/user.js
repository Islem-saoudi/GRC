const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
  UserId: { type: String, default: uuid.v4, unique: true },
  Name: { type: String, required: true },
  LastName: { type: String, required: true},
  Email: { type: String, required: true},
  LastConnexion: { type: String},
});

const User = mongoose.model('User', userSchema);

module.exports = User;