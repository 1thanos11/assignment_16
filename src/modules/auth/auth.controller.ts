import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import { successResponse } from "../../common/response/success.response.js";
import authService from "./auth.service.js";
import { signupSchema } from "./auth.validation.js";
import { validate } from "../../middleware/validation.middleware.js";

const router = Router();

//signup
router.post(
  "/signup",
  validate(signupSchema),
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    const { username, email, password, confirmPassword, phone } = req.body;
    const result = await authService.signup({
      username,
      email,
      password,
      confirmPassword,
      phone,
    });

    return successResponse({ res, status: 201, data: result });
  },
);

export default router;
