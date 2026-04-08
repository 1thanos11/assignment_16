import z from "zod";

export const generalValidationFields = {
  username: z
    .string({ error: "username must be string" })
    .min(1, { error: "username can't be less than 1" })
    .max(15, { error: "username can't be exceed 15" }),
  confirmPassword: z.string(),
  email: z.email({ error: "enter valid email format" }),
  password: z.string({ error: "password must be string" }),
  phone: z.string(),
};
