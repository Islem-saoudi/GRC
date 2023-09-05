const mongoose = require('mongoose');
const uuid = require('uuid');

const actionSchema = new mongoose.Schema({
  ActionId: { type: String, default: uuid.v4, unique: true },
  Description: { type: String, required: true },
  TypeAction: { type: String, required: true },
  DateDebut: { type: Date, required: true },
  DateFin: { type: Date, required: true },
  Priority: { type: Number, required: true },
  Cout: { type: Number, required: true },
  Source: { type: String },
  Status: { type: String },
  CommentaireId: { type: String },
  CoutSuppId: { type: String },
  DateFinSupp: { type: Date, required: true },
  SecurityId: { type: String },
});


const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
