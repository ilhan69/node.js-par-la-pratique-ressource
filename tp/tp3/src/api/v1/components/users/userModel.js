const mongoose = require('../../../../config/db');
const userModel = mongoose.model('User', 
{ 
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        require: true,
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        require: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        min: 8,
        max: 256,
        trim: true,
        require: true,
    },
    phone: String,
    creationDate: {
        type: Date,
        default: () => new Date(),
    },
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer',
    }
 });

module.exports = userModel;