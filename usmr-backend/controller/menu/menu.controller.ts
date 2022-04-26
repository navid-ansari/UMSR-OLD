import { Request, Response } from "express";

// service
import { getMenu } from "../../service";

// logger
import log from "../../logger";

export async function getMenuHandler(req: Request, res: Response) {
  log.info("Menu Controller Working");
    try {
      return getMenu(req, res);
    } catch (e) {
      log.error("Error In Menu Controller");
    }
  }