const mongoose = require('mongoose');
const uuid = require('uuid');

const rasciSchema = new mongoose.Schema({
  RoleRasci: { type: String, default: uuid.v4, unique: true },
  Description: { type: String},
  Symbole: { type: String},
});

const Rasci = mongoose.model('RASCI', rasciSchema);

module.exports = Rasci;