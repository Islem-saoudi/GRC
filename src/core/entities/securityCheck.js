const mongoose = require('mongoose');
const uuid = require('uuid');

const securityCheckSchema = new mongoose.Schema({
    SecurityId: { type: String, default: uuid.v4, unique: true},
    Description: { type: String, require: true },
    Labbel: { type: String, require: true },
    Source: { type: String, require: true }
});

const securityCheck = mongoose.model('securityCheckFamily', securityCheckSchema);
module.exports = securityCheck;