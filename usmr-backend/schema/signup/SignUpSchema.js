const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    dob: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: Array
    }
});

module.exports = mongoose.model("SignupModel", SignupSchema, "USERS");