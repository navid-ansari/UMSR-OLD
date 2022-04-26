import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// logger
import log from "../../logger";

// schema
const signInSchema = require("../../schema/signin/SignInSchema");

// model
import { IUser } from "../../model";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

export async function signInUser(req: Request, res: Response) {
  log.info("Sign In Service Working");
  const email = req.body.email;
  const password = req.body.password;
  //log.info(req.body);
  try {
    const user: IUser = await signInSchema.findOne({ email });
    if (!user) {
      res
        .status(200)
        .json({ success: false, data: user, message: "User not found" });
    }
    if (user) {
      if (password !== user.password) {
        res.status(200).json({
          success: false,
          message: "Username or Password is incorrect.",
        });
      } else {
        res
          .status(200)
          .json({ success: true, data: user, message: "User Logged In." });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      message: "Error executing the Sign In query.",
    });
  }
}
