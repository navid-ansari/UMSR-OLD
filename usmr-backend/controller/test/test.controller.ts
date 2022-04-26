import { Request, Response } from "express";

// service
import { testApi } from "../../service";

// logger
import log from "../../logger";
import logger from "../../logger";

export async function testApiHandler(req: Request, res: Response) {
    logger.info("Test Controller Working");
    try {
      /*const user = await createUser(req.body);
      return res.send(omit(user.toJSON(), "password"));*/
      // const test = await testApi(req, res);
      return await testApi(req, res);
    } catch (e) {
      /*log.error(e);
      return res.status(409).send(e.message);*/
    }
  }