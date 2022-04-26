const mongoose = require('mongoose')

const SignInSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('SignInModel', SignInSchema, "USERS");