const mongoose = require('mongoose');
const uuid = require('uuid');

const commentaireSchema = new mongoose.Schema({
  CommentaireId: { type: String, default: uuid.v4, unique: true },
  Commentaire: { type: String },
  DateHeure: { type: Date, default: Date.now }
});

const coutSupplementaireSchema = new mongoose.Schema({
  CoutSuppId: { type: String, default: uuid.v4, unique: true },
  Montant: { type: Number },
  DateHeure: { type: Date, default: Date.now }
});

const securityCheckFamilySchema = new mongoose.Schema({
  SecurityId: { type: String, default: uuid.v4, unique: true },
  Description: { type: String },
  Label: { type: String },
  Source: { type: String }
});

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
  Commentairs: [commentaireSchema],
  Couts: [coutSupplementaireSchema],
  DateFinSupp: { type: Date },
  Securitys: [securityCheckFamilySchema],
});


const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
