import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

// logger
import log from '../../logger'

// schema
const signInSchema = require('../../schema/signin/SignInSchema')

// model
import { IUser } from '../../model'
import { User } from '../../types/controller/user'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

export const signInUser = async (req: Request, res: Response) => {
  //log.info('Sign In Service Working')
  const { email, password } = req.body
  try {
    const user: User = await signInSchema.findOne({ email })
    if (!user) {
      return res.status(404).end()
    }
    if (user) {
      if (password !== user.password) {
        return res.status(401).end()
      }
      if (password === user.password) {
        return res.status(200).json(user)
      }
    }
  } catch (error: any) {
    throw error
  }
}
