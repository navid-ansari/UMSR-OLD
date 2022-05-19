import { Request, Response } from 'express'

// logger
import log from '../../logger'

// service
import { userList } from '../../service'

export async function userListHandler(req: Request, res: Response) {
    try {
        /*const user = await createUser(req.body);
      return res.send(omit(user.toJSON(), "password"));*/
      return userList(req, res)
    } catch (e) {
        /*log.error(e);
      return res.status(409).send(e.message);*/
      log.error('Error In User List Controller')
    }
}
