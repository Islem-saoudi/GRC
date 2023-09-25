const mongoose = require('mongoose');
const uuid = require('uuid');

const securityCheckFamilySchema = new mongoose.Schema({
    SecurityId: { type: String, default: uuid.v4, unique: true},
    Description: { type: String, required: true },
    Labbel: { type: String, required: true },
    Source: { type: String, required: true }
});

const SecurityCheckFamily = mongoose.model('SecurityCheckFamily', securityCheckFamilySchema);
module.exports = SecurityCheckFamily;