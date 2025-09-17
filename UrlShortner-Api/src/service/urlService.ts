import { pool } from "../db/connect";
import { genShortUrl } from "../utils/generateUrl";

export async function createDefaultShortUrl(userId: number, longUrl: string) {
  try {
    let shortUrl = genShortUrl();

    const checkDB = await pool.query(
      "SELECT * FROM urls WHERE short_code = $1",
      [shortUrl]
    );
    if (checkDB.rows.length > 0) {
      throw new Error("Short code exists already");
    }

    const result = await pool.query(
      `INSERT INTO urls (user_id, long_url, short_code)
       VALUES ($1, $2, $3)
       RETURNING id, long_url, short_code, created_at`,
      [userId, longUrl, shortUrl]
    );

    return result.rows[0];
  } catch (err: any) {
    throw new Error(err.message);
  }
}
