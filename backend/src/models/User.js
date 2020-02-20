const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String, 
    idade: Number, 
    email: String,
    cidade: String
});

module.exports = mongoose.model('User', UserSchema);