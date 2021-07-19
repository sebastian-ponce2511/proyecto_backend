const mongoose = require('mongoose')

let Brand = new mongoose.Schema({

    
    name: {
        type: String,
        default: 0
    },

    productId: {
         type: mongoose.Types.ObjectId, 
         ref: "Product"
     }
    
})

module.exports = mongoose.model('Brand', Brand)