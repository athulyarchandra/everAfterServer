const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique:true
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
    },
    dob: {
        type: String,
    },
    height: {
        type: String,
    },
    fatherName: {
        type: String,
    },
    city: {
        type: String,
    },
    age: {
        type: String,
    },
    weight: {
        type: String,
    },
    motherName: {
        type: String,
    },
    address: {
        type: String,
    },
    job: {
        type: String,
    },
    companyName: {
        type: String,
    },
    degree: {
        type: String,
    },
    school: {
        type: String,
    },
    collage: {
        type: String,
    },
    whatsApp: {
        type: String,
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    twitter: {
        type: String,
    },
    hobbies: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    userId:{
        type:String,
        required:true
    }
})

const profiles = mongoose.model("profiles", profileSchema)
module.exports = profiles



