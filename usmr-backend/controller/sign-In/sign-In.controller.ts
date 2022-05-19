import { Request, Response } from 'express'

// service
import { signInUser } from '../../service'

import { User } from '../../types/controller/user'

// logger
import log from '../../logger'
import { validateId } from '../validator/validateId'
import { validateSignInReq } from '../validator/signin-request-validator'
import { errorResponse } from '../../lib/errors'

export const signInHandler = async (req: Request, res: Response) => {
  log.info('Sign In Controller Working')
  const { email, password } = req.body
  try {
    validateSignInReq({ email, password })
    return signInUser(req, res)
  } catch (e: any) {
    log.error('Error In Sign In Controller')
    errorResponse(res, e)
    throw e
  }
}
