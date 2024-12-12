const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true}, { strict: false });  

module.exports = mongoose.model('User', userSchema);  //module.exports exports object created by mongoose.model