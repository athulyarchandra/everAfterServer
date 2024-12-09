const mongoose = require('mongoose')

const userSchama = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
   
})

const users = mongoose.model("users", userSchama)
module.exports = users



