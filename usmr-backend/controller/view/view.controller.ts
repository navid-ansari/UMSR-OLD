import { Request, Response } from 'express'

// logger
import log from '../../logger'

// service
import { viewUser } from '../../service'

// validator
import { validateId } from '../validator/validateId'

export async function viewUserHandler(req: Request, res: Response) {
  try {
    return viewUser(req, res)
  } catch (e) {
    /*log.error(e);
      return res.status(409).send(e.message);*/
    log.error('Error In View Controller')
  }
}
