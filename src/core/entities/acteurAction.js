const mongoose = require('mongoose');
const uuid = require('uuid');

const acteurActionSchema = new mongoose.Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ActionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Action' },
  RoleRasci: { type: mongoose.Schema.Types.ObjectId, ref: 'RASCI' },
  Description: { type: String, require: true},
  TypeAction: { type: String},
});

module.exports = mongoose.model('ActeurAction', acteurActionSchema);

