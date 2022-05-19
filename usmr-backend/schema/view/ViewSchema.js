const mongoose = require('mongoose')

const Schema = mongoose.Schema
//mongoose.Promise = global.Promise;
const ViewSchema = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    fullname: {
        type: String
    },
    dob: {
        type: String
    },
    role: {
        type: Array
    }
})

module.exports = mongoose.model('ViewModel', ViewSchema, 'USERS')
