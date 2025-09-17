import { Request, Response } from "express";
import {pool} from "../db/connect";

export async function AllUsers(req: Request, res: Response) {
  try {
    const result = await pool.query(
      `SELECT id, name, email, created_at, updated_at FROM users;`
    );

    return res.status(200).json(result.rows);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

