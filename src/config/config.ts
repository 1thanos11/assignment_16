import { config } from "dotenv";
import { resolve } from "node:path";
import z from "zod";

config({ path: resolve(`./.env.${process.env.NODE_ENV}`) });

//env schema
const envSchema = z.object({
  //APP
  PORT: z.coerce.number(),
  //DB
  DB_URI: z.string(),
  REDIS_URI: z.string(),
  //Security
  SALT_ROUND: z.coerce.number(),
  ENCRYPTION_SECRET_KEY: z.string().min(1),
  IV_LENGTH: z.coerce.number(),
});
export const env = envSchema.parse(process.env);

//App
export const PORT = env.PORT;
export const APPLICATION_NAME = process.env.APPLICATION_NAME;

//DB
export const DB_URI = env.DB_URI;
export const REDIS_URI = env.REDIS_URI;

//Security
export const SALT_ROUND = env.SALT_ROUND;
export const ENCRYPTION_SECRET_KEY = env.ENCRYPTION_SECRET_KEY;
export const IV_LENGTH = env.IV_LENGTH;

//Google
export const CLIENT_IDS = process.env.CLIENT_IDS;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;

//Links
export const FACEBOOK_LINK = process.env.FACEBOOK_LINK;
export const INSTAGRAM_LINK = process.env.INSTAGRAM_LINK;
export const TWITTER_LINK = process.env.TWITTER_LINK;
