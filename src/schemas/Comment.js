const mongoose = require('mongoose')

let Comment = new mongoose.Schema({
    //_id: Types.ObjectId,
    body: String,
    creationDate: {
        type: Date,
        required: true,
        default: Date.now 
    },
    dislikesCount: {
        type: Number,
        default: 0
    },
    likesCount: {
        type: Number,
        default: 0
    },
     productId: {
         type: mongoose.Types.ObjectId, 
         ref: "Product"
     }
    
})

module.exports = mongoose.model('Comment', Comment)