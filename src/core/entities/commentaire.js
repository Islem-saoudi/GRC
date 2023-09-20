const mongoose = require('mongoose');
const uuid = require('uuid');

const commentaireSchema = new mongoose.Schema({
    CommentaireId: { type: String, default: uuid.v4, unique: true },
    Commentaire: { type: String, required: true },
    DateHeure: { type: Date, default: Date.now },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
  
  
const Commentaire = mongoose.model('Commentaire', commentaireSchema);
  
module.exports = Commentaire;