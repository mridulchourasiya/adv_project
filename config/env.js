/* eslint-disable no-undef */
import { config } from "dotenv";

// Load .env file based on environment (e.g., .env.development.local)
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, DB_URL } = process.env;
