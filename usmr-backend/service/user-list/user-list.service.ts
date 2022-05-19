import { Request, Response } from 'express'

const UserSchema = require('../../schema/user/UserSchema')

export async function userList(req: Request, res: Response) {
  try {
    const userList = await UserSchema.find({})
    if (userList) {
      return res.status(200).json(userList)
    }
  } catch (error: any) {
    return res.status(500).end()
  }
}
