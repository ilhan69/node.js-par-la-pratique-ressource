const mongoose = require('../../../../config/db');
const userModel = mongoose.model('User', 
{ 
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    creationDate: Date,
    role: String,
 });

module.exports = userModel;