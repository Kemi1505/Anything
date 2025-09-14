import { Request, Response } from "express";
import { validatePassword } from "../service/UserService";
import { createAccessToken, createSession } from "../service/sessionSevice";
import config from "config";
import {sign} from "../utils/jwt.utils"


export async function createUserSessionHandler(req: Request, res: Response){
    // validte emaill and password
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send("Invalid username or password");
    }

    // create a session
    const session = await createSession(user._id.toString(), req.get("user-agent") || "");

    // create access token

    const accessToken = createAccessToken({
        user,
        session,
    })

    // create refresh token

    const refreshToken = sign(session, {
        expiresIn: config.get("refreshTokenTtl"),
    })

    // send refresh and acess token to user
    return res.send({accessToken, refreshToken});
}