import { Express, Request, Response } from "express";

// logger
import logger from "./logger";

// validation
import { validateReq } from "./middleware";

//
import { signInSchema } from "./validation";

import { testApiHandler, getMenuHandler, createSignInHandler, createSignUpHandler, getBagHandler } from "./controller";

export default (app: Express) => {

    // test api
    app.get("/api/test", testApiHandler);

    // menu
    app.get("/api/menu", getMenuHandler);

    // sign up
    app.post("/api/signup", validateReq(signInSchema), createSignUpHandler);

    // sign in
    app.post("/api/signin", validateReq(signInSchema), createSignInHandler);

    // bag
    app.get("/api/bag/:id", getBagHandler);
}
