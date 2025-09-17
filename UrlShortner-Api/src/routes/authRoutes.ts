import { Express, Request, Response } from "express";
import validate from "../middleware/validate";
import { createUserSchema } from "../utils/validateUser";
import { createUserHandler } from "../controller/userController";
import { sessionHandler } from "../controller/loginController";
import { createSessionSchema } from "../utils/validateSession";
import { activeSession } from "../controller/sessionController";
import { deleteSession } from "../controller/logoutController";
import { AllUsers } from "../db/getUsers";

export default (app: Express) =>{
    app.get("/check", (req: Request, res: Response) => res.sendStatus(200))

    app.post("/api/signup",validate(createUserSchema), createUserHandler);

    app.post("/api/login", validate(createSessionSchema), sessionHandler);

    app.post("/api/logout", deleteSession );

    app.get("/api/users", activeSession)

    app.get("/api/allusers", AllUsers)

}