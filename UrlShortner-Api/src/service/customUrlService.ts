import { pool } from "../db/connect";

export async function createCustomUrl(userId: number, longUrl: string, customUrl: string) {
  try {
    const existing = await pool.query(
      "SELECT * FROM urls WHERE short_code = $1",
      [customUrl]
    );
    
    if (existing.rows.length > 0) {
      throw new Error("Url is in use");
    }

    const result = await pool.query(
      `INSERT INTO urls (user_id, long_url, short_code)
       VALUES ($1, $2, $3)
       RETURNING id, long_url, short_code, created_at`,
      [userId, longUrl, customUrl]
    );

    return result.rows[0];
  } catch (err: any) {
    throw new Error(err.message);
  }
}
