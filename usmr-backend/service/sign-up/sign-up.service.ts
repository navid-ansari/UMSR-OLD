import { Request, Response } from 'express'

//const signupSchema = require('../../schema/signup/SignUpSchema')
const UserSchema = require('../../schema/user/UserSchema')

export async function signUpUser(req: Request, res: Response) {
  const user = new UserSchema({ ...req.body })
  console.log(user);
  try {

    // check if username already taken
    const username = await UserSchema.findOne({username: req.body.username})
    if(username) {
      return res.status(422).send({message: 'username already exist'});
    }
    
    // check if email already taken
    const email = await UserSchema.findOne({email: req.body.email})
    if(email) {
      return res.status(422).send({message: 'email id already exist'});
    }

    // save user
    const save = await user.save()
    console.log(save)
    if (save) {
      res.set('Location', `api/view/${save._id}`)
      return res.sendStatus(201)
    }
  } catch (error: any) {
    console.log(error)
    return res.sendStatus(500)
  }
}
