import { Express, Request, Response } from "express";
import { createUserSchema, createUserSessionSchema } from "./schema/userScema";
import { createUserHandler } from "./controller/userController";
import validateRequest from "./middleware/validateRequest";
import { createUserSessionHandler } from "./controller/sessionController";

export default (app: Express) => {
    app.get("/check", (req: Request, res: Response) => res.sendStatus(200))

    // Register
    // POST/api/user
    app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

    // Login
    // POST/api/sessions
    app.post("/api/sessions", validateRequest(createUserSessionSchema), createUserSessionHandler)

    // get user sessions
    // GET/api/sessions

    // Logout
    //DELETE/api/sessions
}