const mongoose = require('mongoose');
const uuid = require('uuid');

const coutSuppSchema = new mongoose.Schema({
    CoutSuppId: { type: String, default: uuid.v4, unique: true },
    Montant: { type: Number, required: true },
    DateHeure: { type: Date, default: Date.now },
});

const CoutSupp = mongoose.model('CoutSupplementaire', coutSuppSchema);

module.exports = CoutSupp;