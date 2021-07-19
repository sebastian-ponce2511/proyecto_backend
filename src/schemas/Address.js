const mongoose = require('mongoose')


let Address = new mongoose.Schema({
    //_id: Types.ObjectId,
    country: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
      userId: {
          type: mongoose.Types.ObjectId, 
          ref: "User"
      }
})

module.exports = mongoose.model('Address', Address)