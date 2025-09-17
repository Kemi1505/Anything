import {pool} from "../db/connect";
import { Url } from "../models/urlModel";

export async function getUserUrl(userId: number): Promise<Url[]> {
  const result = await pool.query<Url>(
    "SELECT * FROM urls WHERE user_id = $1 ORDER BY created_at DESC",
    [userId]
  );
  return result.rows;
}
