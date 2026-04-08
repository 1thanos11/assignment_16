import { createClient } from "redis";
import { REDIS_URI } from "../config/config";

export const redisClient = createClient({
  url: REDIS_URI,
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log(`REDIS_DB Connected Successfully`);
  } catch (error) {
    console.log(`REDIS_DB Connection Failed`);
  }
};
