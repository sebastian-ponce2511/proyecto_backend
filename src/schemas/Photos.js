const mongoose = require('mongoose')

let Photos = new mongoose.Schema({

    //_id: Types._ObjectId,
    productId: {
        type: mongoose.Types.ObjectId,
         ref: 'Product'
        },
    url: {
        type: 'String',
        required: true
    }
})

module.exports = mongoose.model('Photos', Photos)