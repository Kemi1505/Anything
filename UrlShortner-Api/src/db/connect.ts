import { Pool } from "pg";
import config from "config";

let pool: Pool;

const connect = async () => {
  const dbConfig = {
    user: config.get("dbUser") as string,
    host: config.get("dbHost") as string,
    database: config.get("dbName") as string,
    password: config.get("dbPassword") as string,
    port: config.get("dbPort") as number,
  };

  try {
    pool = new Pool(dbConfig);
    await pool.query("SELECT NOW()");
    console.log(" Database Connected");
  } catch (error) {
    console.error("Database connection error", error);
    process.exit(1);
  }
};

export { connect, pool };
