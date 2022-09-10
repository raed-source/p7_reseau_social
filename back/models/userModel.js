const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        max: 25
    },
    post: {
        type: String,
        max: 25
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passward: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: '',

    }

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', userSchema);