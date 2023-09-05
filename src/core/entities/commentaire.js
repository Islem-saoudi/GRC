const mongoose = require('mongoose');
const uuid = require('uuid');

const commentaireSchema = new mongoose.Schema({
    CommentaireId: { type: String, default: uuid.v4, unique: true },
    CommentaireD: { type: String, required: true },
    DateHeure: { type: Date, default: Date.now },
});
  
  
const Commentaire = mongoose.model('Commentaire', commentaireSchema);
  
module.exports = Commentaire;