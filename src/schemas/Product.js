const {Schema, model} = require('mongoose')

const Product = new Schema ({

    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 1
    },
    sold_count: {
        type: Number,
        default: 0
    },
    model: {
        type: String,
    },
    brand: {
        type: String,
        required: true
    },
    seller_id: {
        type: Number,
        required: true,
        default: 0,
    },
    views_count: {
        type: Number,
        default: 0
    },
})


module.exports = model ('Product', Product)