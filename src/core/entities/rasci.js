const mongoose = require('mongoose');
const uuid = require('uuid');

const rasciSchema = new mongoose.Schema({
  RoleRasci: { type: String, default: uuid.v4, unique: true },
  Description: { type: String},
  Symbole: { type: String},
});

module.exports = mongoose.model('RASCI', rasciSchema);