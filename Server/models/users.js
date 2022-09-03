const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
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
        lowercase: true,
        unique: true,
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
        default: null
    }
})
module.exports = mongoose.model('users',userSchema)