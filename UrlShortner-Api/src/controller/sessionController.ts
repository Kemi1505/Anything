import { Request, Response } from "express";
import {pool} from "../db/connect";

export async function activeSession(req: Request, res: Response) {
  try {
    const query = `
      SELECT s.session_id, s.expires_at, s.valid,
             u.id AS user_id, u.name, u.email
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.expires_at > NOW() AND s.valid = true;
    `;

    const result = await pool.query(query);

    res.status(200).json({ activeSessions: result.rows });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

