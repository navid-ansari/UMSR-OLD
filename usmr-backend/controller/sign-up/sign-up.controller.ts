import { Request, Response } from 'express'

// logger
import log from '../../logger'

// service
import { signUpUser } from '../../service'

export async function signUpHandler(req: Request, res: Response) {
    try {
        /*const user = await createUser(req.body);
      return res.send(omit(user.toJSON(), "password"));*/
      return signUpUser(req, res)
    } catch (e) {
        /*log.error(e);
      return res.status(409).send(e.message);*/
      log.error('Error In Sign Up Controller')
    }
}
