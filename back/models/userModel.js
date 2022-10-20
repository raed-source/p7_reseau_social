const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({ 
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail]
    },
    passward: {
        type: String,
        required: true
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);