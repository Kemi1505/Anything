import {pool} from "../db/connect";
import { User } from "../models/userModel";
import bcrypt from "bcrypt"
import config from "config"

type UserInput = Omit<User, "id" | "created_at" | "updated_at">;

export async function createUser(input: UserInput): Promise<User> {
  try {

    const salt = await bcrypt.genSalt(config.get("saltWorkFactor"))
    const hashedPassword = await bcrypt.hash(input.password, salt);

    const query = `
      INSERT INTO users (email, name, password)
      VALUES ($1, $2, $3)
      RETURNING id, email, name, password, created_at, updated_at;
    `;
    const values = [input.email.toLowerCase(), input.name, hashedPassword];

    const result = await pool.query<User>(query, values);
    const newUser = result.rows[0];
    return newUser!;

  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw new Error(error.message);
  }
}
