import { Request, Response } from "express";
import {pool} from "../db/connect";

export async function deleteOneUser(req: Request, res: Response) {
  try {
    const { name } = req.params;

    const result = await pool.query(
      `DELETE FROM users WHERE name = $1 RETURNING *;`,
      [name]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: `User ${name} deleted`, user: result.rows[0] });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteAllUsers(req: Request, res: Response) {
  try {
    const result = await pool.query(`DELETE FROM users RETURNING *;`);

    return res.status(200).json({
      message: `${result.rowCount} user(s) deleted`,
      users: result.rows,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

