const mongoose = require('mongoose');

import { IUser } from "../../model";

const Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;
/*const UserSchema = new Schema({
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
    }
});*/

// Javascript schema
/*const UserSchema = new Schema({
    _id: {
        type: String
    },
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

module.exports = mongoose.model("UserModel", UserSchema, "USERS");*/

// Typescript schema
const UserSchema = new Schema({
    _id: {
        type: String
    },
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

module.exports = mongoose.model("UserModel", UserSchema, "USERS");