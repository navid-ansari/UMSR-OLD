import { Request, Response } from "express";

// service
import { signInUser, signUpUser } from "../../service";

// logger
import log from "../../logger";

export async function createSignInHandler(req: Request, res: Response) {
  log.info("Sign In Controller Working");
    try {
      return signInUser(req, res);
    } catch (e) {
      log.error("Error In Sign In Controller");
    }
  }