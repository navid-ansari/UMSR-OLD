import mongoose, { Schema, model, connect } from "mongoose";

import { IUser, IRole } from "../../model";

//const Schema = mongoose.Schema;

// Typescript Schema
const UserSchema = new Schema<IUser>({
  _id: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  dob: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: [
      {
        value: {
          type: String,
        },
        label: {
          type: String,
        },
        code: {
          type: Number,
        },
      },
    ],
  },
});

module.exports = mongoose.model<IUser>("UserModel", UserSchema, "USERS");
