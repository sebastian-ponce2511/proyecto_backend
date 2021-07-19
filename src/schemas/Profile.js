const mongoose = require('mongoose')

let Profile = new mongoose.Schema({
    //_id: Types.ObjectId,

    // userId: {
    //     type: mongoose.types.ObjectId,
    //     ref: "User"
    // },
        
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },
    birthDate: Date
})

module.exports = mongoose.model('Profile', Profile)