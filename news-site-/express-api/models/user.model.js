const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {
        required: true,
        type: String,
        // unique: true,
        lowercase: true
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        sparse: true,
        lowercase: true,
        // unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        // unique: true,
    },
    dob: Date,
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    image: {
        type: String,
        default: undefined
    },
    // role: {
    //     type: String,
    //     enum: ['admin', 'normal'],
    //     default: 'renter'
    // },
    cart: {
        type: [String],
        default: null
    },
    book: {
        type: String,
        default: false
    },
    roomAddress: String
}, {
    timestamps: true
})

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;