const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { 
        type: String, required: true
     },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
    },
    password: {
        type: String,
        required: true,
    },

})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;
