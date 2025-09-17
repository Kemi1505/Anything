import { Request, Response } from "express";
import {pool} from "../db/connect";

export async function deleteSession(req: Request, res: Response) {
  try {
    const { sessionId } = req.cookies;

    if (sessionId) {
      await pool.query(`DELETE FROM sessions WHERE session_id = $1;`, [sessionId]);
      res.clearCookie("sessionId");
    }

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

