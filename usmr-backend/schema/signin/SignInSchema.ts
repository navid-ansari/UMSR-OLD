import mongoose, { Schema, model, connect, Types } from 'mongoose'

const SignInSchema = new Schema<any>({
  email: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model<any>('SignInModel', SignInSchema, 'USERS')
