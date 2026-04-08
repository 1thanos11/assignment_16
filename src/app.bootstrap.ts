import express from "express";

import { GlobalErrorHandler } from "./middleware/error.middleware";
import { authRouter } from "./modules";
import { PORT } from "./config/config";
import connectDB, { connectRedis } from "./DB";

async function bootstrap() {
  await connectDB();
  await connectRedis();

  const app: express.Express = express();
  app.use(express.json());

  app.use("/api/auth", authRouter);
  app.use(GlobalErrorHandler);
  app.listen(PORT, () => {
    console.log(`Server Is Running On PORT ${PORT}`);
  });
}

export default bootstrap;
