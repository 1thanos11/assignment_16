import z from "zod";

import { loginSchema, signupSchema } from "./auth.validation.js";

export type LoginDto = z.infer<typeof loginSchema.body>;
export type SignupDto = z.infer<typeof signupSchema.body>;
