import { Request, Response } from "express";

// logger
import log from "../../logger";

export async function createSignUpHandler(req: Request, res: Response) {
    try {
      /*const user = await createUser(req.body);
      return res.send(omit(user.toJSON(), "password"));*/
    } catch (e) {
      /*log.error(e);
      return res.status(409).send(e.message);*/
    }
  }