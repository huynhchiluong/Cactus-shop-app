const mongoose = require('mongoose');
const Schema = mongoose.Schema
const productSchema = new Schema({
    title:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true,
        default: 0
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        default: Date.now()
    },
    content:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    image:{
        type: Object,
        required : true
    },
    quantity:{
        type: Number,
        required : true,
        default: 0
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
})
module.exports = mongoose.model('products',productSchema)