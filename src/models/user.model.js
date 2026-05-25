const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: [true, 'Username already taken'],
        required: true
    },
    email: {
        type: String,
        unique: [true, 'Account already exist with this email address'],
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel