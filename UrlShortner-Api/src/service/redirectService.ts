import { pool } from "../db/connect";

export async function getLongUrl(shortUrl: string) {
  const result = await pool.query(
    "SELECT long_url FROM urls WHERE short_code = $1",
    [shortUrl]
  );
  return result.rows[0] || null;
}
