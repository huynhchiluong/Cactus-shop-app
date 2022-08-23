const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: 'user',
        enum: ['user','admin']
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    avatar:{
        type: String,
        required: true
    },
    token:{
        type: String,
    }
})
module.exports = mongoose.model('users',userSchema)