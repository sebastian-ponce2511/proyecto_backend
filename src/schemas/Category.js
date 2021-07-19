const {Schema, Types, model} = require('mongoose')

const Category = new Schema({
    //_id: Types.ObjectId,
    categoryId: {
        type: Types.ObjectId,
         ref: 'Category'
        },
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model ('Category', Category)