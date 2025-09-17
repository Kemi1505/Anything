import {pool} from "../db/connect";
import bcrypt from "bcrypt";
import { omit } from "lodash";
import { User } from "../models/userModel";

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {

  const query = `SELECT * FROM users WHERE LOWER(email) = LOWER($1) LIMIT 1;`;
  const result = await pool.query<User>(query, [email]);

  const user = result.rows[0];

  if (!user) {
    return false;
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return false;
  }

  return omit(user, "password");
}
