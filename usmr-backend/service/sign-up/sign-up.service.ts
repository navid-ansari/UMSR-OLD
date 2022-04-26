
import { Request, Response } from "express";

export async function signUpUser(req: Request, res: Response) {
    if(req) {
        res.send("New Api Working");
    }
}