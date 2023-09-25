const mongoose = require('mongoose');
const uuid = require('uuid');


const actionSchema = new mongoose.Schema({
  ActionId: { type: String, default: uuid.v4, unique: true },
  NameAction: { type: String, required: true },
  Description: { type: String, required: true },
  TypeAction: { type: String, required: true },
  DateDebut: { type: Date, required: true },
  DateFin: { type: Date, required: true },
  Priority: { type: Number, required: true },
  Cout: { type: Number, required: true },
  Source: { type: String },
  Status: { type: String },
  CommentaireIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commentaire' }],
  CoutSuppIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CoutSupplementaire' }],
  DateFinSupp: { type: Date },
  SecurityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SecurityCheckFamily' }],
});


const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
