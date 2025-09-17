import crypto from "crypto";
import {pool} from "../db/connect";
import { Session } from "../models/sessionModel";

export async function createSession(userId: number): Promise<string> {
  const sessionId = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3); // Logged in 3 days

  const query = `
    INSERT INTO sessions (user_id, session_id, expires_at, valid)
    VALUES ($1, $2, $3, true)
    RETURNING *;
  `;

  const values = [userId, sessionId, expiresAt];

  const result = await pool.query<Session>(query, values);

  return result.rows[0]!.session_id;
}

