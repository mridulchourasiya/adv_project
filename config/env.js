/* eslint-disable no-undef */
import { config } from "dotenv";

// Load .env file based on environment (e.g., .env.development.local)
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  PORT,
  NODE_ENV,
  DB_URL,
  JWT_SECRET,
  JWT_EXPIRS_ID,
  ARCJET_KEY,
  ARCJET_ENV,
} = process.env;
