import { Request, Response } from "express";
import { validatePassword } from "../utils/validatePassword";
import { createSession } from "../service/sessionService";
import { cookieInfo } from "../utils/cookiesInfo";
import {pool} from "../db/connect";

export async function sessionHandler(req: Request, res: Response) {
  try {
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    
    await pool.query(`DELETE FROM sessions WHERE user_id = $1;`, [user.id]);
    const sessionId = await createSession(user.id!);

    res.cookie("sessionId", sessionId, cookieInfo);

    res.status(200).json({
      message: "Login successful",
      sessionId,
      cookie: req.cookies,
      user,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
}






